/**
 * Load manager is used to perform autoloading of the required resources for a simulation scenario.
 * It looks in the scenario file and detects which JS and CSS files need to be used, and automatically
 * creates the link and script elements.
 *
 * Mapping source: http://www.w3schools.com/colors/colors_names.asp
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @license The MIT License (MIT)
 */
var oes = oes || {};
var sim = sim || {};
sim.model = sim.model || {};
sim.model.space = sim.model.space || {};

oes.loadManager = {
  // loadManager.js relative path
  // NOTE: intended for internal use only!
  _ownPath: "./",
  // loadManager script file name (normally is "loadManager.js")
  // NOTE: intended for internal use only!
  _ownScriptFilename: "loadManager.js",
  // the URL query params
  queryParams: {},
  // flag to enable the usage of scenario ID in the URL (mostly used for NodeJS/Heroku)
  useScenarioId: false,
  // the debug level of the loadManager (one of: "info", "warning" or "error")
  // NOTE: default value is "error"
  debugLevel: "info",
  // sets the loading mode.
  // Possible values: one of {"deploy", "dev", "frameworkDev"}
  // NOTE: default value is "frameworkDev", and to change it, just set this parameter
  //       to something else, by using a script element in the simulation.html file
  //       immediately after the script element which loads the loadManager.js script file.
  codeLoadingMode: "frameworkDev",
  // flag to specify that this is a description page, not a simulation startup page.
  // Possible values: one of {"simulation", "description"}.
  // NOTE: default value is "simulation", and to change it, just set this parameter
  //       to something else, by using a script element in the simulation.html file
  //       immediately after the script element which loads the loadManager.js script file.
  // the name or ID of the simulation model
  modelNameOrId: "",
  // the scenario ID
  scenarioIdentifier: "",
  // the part of the URL that is the start point for the simulation path
  simsUrlIdentifier: "sims",
  // the load protocol, e.g., file, http or https
  pageProtocol: "file",
  // the step for progress bar increment (computed later in preload)
  progressIncStep: 0,
  // specifies the base path for file loading.
  // NOTE: every loading mode has its own local basePath which can be overridden
  //       by using this parameter, which takes precedence over the local one.
  basePath: "",
  // a callback to be invoked when the load ends.
  // NOTE: this can be overridden with whatever needs to be done at the end.
  loadFinishedCallback: function (){},
  components: {
    // components for OES Framework development
    // NOTE: used by OES team to develop the framework and example simulation scenarios
    frameworkDev: {
      basePath: "../../../../",
      coreCssSrc: [
        "../cLASSjs/css/normalize.css",
        "../cLASSjs/css/vIEW.css",
        "css/OESjs.css"
      ],
      coreJsSrc: [
        "../cLASSjs/lib/browserShims.js",
        "../cLASSjs/lib/errorTypes.js",
        "../cLASSjs/lib/util.js",
        "../cLASSjs/lib/dom.js",
        "../cLASSjs/src/eNUMERATION.js",
        "../cLASSjs/src/cLASS.js",
        "../cLASSjs/src/oBJECTvIEW.js",

        "lib/dom-additions.js",
        "lib/svg.js",
        "lib/rand.js",

        "src/v1/OES.js",
        "src/v1/ClientLogger.js",
        "src/v1/EventList.js",
        "src/v1/statistics.js",
        "src/v1/simulator.js",
        "src/ui/simulatorUI.js"],
      coreSpace: [
        "src/space/space.js",
        "src/space/ObjectInOneDimSpace.js",
        "src/space/ObjectInTwoDimSpace.js",
        "src/space/ObjectInThreeDimSpace.js",
        "src/space/gridOfIntegers.js",
        "src/space/gridOfObjects.js",
        "src/space/overlayGrid.js",
        "src/space/ObjectInGridSpace.js"],
      oneDimSvgVis: ["lib/svg.js", "src/ui/space/oneDimSVG.js"],
      gridDomVis: ["src/ui/space/gridDom.js", "src/ui/space/gridOfIntegersDom.js", "src/ui/space/gridOfObjectsDom.js"],
      babylonVis: ["lib/babylon.2.4.min.js", "src/ui/cssColorNames.js","src/ui/space/threeDimBabylon.js"],
      phaserVis: [
        "lib/phaser.min.js",
        "lib/phaser-plugin-isometric.min.js",
        "src/ui/space/widgets/Widget.js",
        "src/ui/space/widgets/meter/Meter.js",
        "src/ui/space/widgets/AlphanumericDisplay/AlphanumericDisplay.js",
        "src/ui/space/twoDimPhaser.js"],
      chartistStatVis: [
        "css/chartist.min.css",
        "css/chartist-plugin-legend.css",
        "lib/chartist.min.js",
        "lib/chartist-plugin-legend.js"],
      description: [
        //"../cLASSjs/css/normalize.css",
        "css/normalize.min.css",
        "css/description.css",
        "src/ui/description.js"
      ]
    },
    // components for simulation development
    // NOTE: used by simulation authors
    dev: {
      basePath: "../framework/",
      coreCssSrc: [],
      coreJsSrc: [],
      coreSpace: ["space-core.js"],
      oneDimSvgVis: ["oneDimSVG-visualization.js"],
      gridDomVis: ["gridDom-visualization.js"],
      babylonVis: ["babylon-visualization.js"],
      phaserVis: ["phaser-visualization.js"],
      chartistStatVis: [],
      description: ["description.css", "description.js"]
    },
    // components for production mode
    // NOTE: simulations are deployed on a web server
    deploy: {
      basePath: window.location.href + "../framework/",
      coreCssSrc: [],
      coreJsSrc: [],
      coreSpace: ["space-core.js"],
      oneDimSvgVis: ["oneDimSVG-visualization.js"],
      gridDomVis: ["gridDom-visualization.js"],
      babylonVis:[
        "https://cdnjs.cloudflare.com/ajax/libs/babylonjs/2.4.1/babylon.js",
        "babylon-visualization-core.js"],
      phaserVis: [
        "https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js",
        "phaser-visualization-core.js"
      ],
      chartistStatVis: [],
      description: ["description.css", "description.js"]
    }
  }
};

/**
 * Display the configuration settings in the browser console.
 * NOTE: this method is mostly used for debug reasons, and does not
 *       have real functionality as part of the loadManager.
 */
oes.loadManager.showConfigInConsole = function() {
  var compSrc = oes.loadManager.components[oes.loadManager.codeLoadingMode],
    // oes.loadManager.basePath has priority´, allowing to override the location.
    basePath = oes.loadManager.basePath || compSrc.basePath;

  if(oes.loadManager.debugLevel !== "info") return;
  console.log("################ loadManager configuration ################");
  console.log("codeLoadingMode = '" + oes.loadManager.codeLoadingMode + "'");
  console.log("pageProtocol = '" + oes.loadManager.pageProtocol + "'");
  console.log("basePath = '" + basePath + "'");
  console.log("modelNameOrId = '" + oes.loadManager.modelNameOrId + "'");
  console.log("useScenarioId = " + oes.loadManager.useScenarioId);
  console.log("_ownPath = '" + (oes.loadManager._ownPath || "./" )+ "'");
  console.log("_ownScriptFilename = '" + (oes.loadManager._ownScriptFilename || "./" )+ "'");
  console.log("queryParams = " + JSON.stringify(oes.loadManager.queryParams));
  console.log("fullURL = '" + window.location.href + "'");
  console.log("###########################################################");
};

/**
 * Detect the codeLoadingMode (one of "frameworkDev", "dev" and "deploy)
 */
oes.loadManager.setup = function(callback) {
  var url = window.location.href, lmPath ="";
  var scripts = document.getElementsByTagName("script");
  var scriptName = oes.loadManager._ownScriptFilename;
  var index = -1, queryParams = [];
  index = url.indexOf("?");
  if (index > -1) {
    queryParams = url.substring(index+1).split("&");
    url = url.substring(0, index);
    queryParams.forEach( function (qParam) {
      var p = "", v = "", pv = [];
      pv = qParam.split("=");
      p = pv[0];
      v = pv[1];
      if (v === "true" || v === "false") v = Boolean(v);
      else if (!isNaN(v)) v = Number(v);
      oes.loadManager.queryParams[p] = v.valueOf();
    });
  }
  callback = typeof callback === "function" ? callback : function (){};
  // create and display the progress bar HTML piece
  oes.loadManager.createProgressBar();
  //detect protocol from page URL
  oes.loadManager.pageProtocol = url.split("://")[0];
  // detect the relative path for the loadManager.js
  lmPath = scripts[scripts.length-1].src;
  if (!lmPath.endsWith(scriptName)) {
    index = lmPath.lastIndexOf("/");
    if (index === -1) scriptName = oes.loadManager._ownScriptFilename = lmPath;
    else scriptName = oes.loadManager._ownScriptFilename = lmPath.substring(index);
  }
  index = lmPath.indexOf(scriptName);
  lmPath = oes.loadManager._ownPath = lmPath.substring(0, index) || "./";
  // try to load the loadManagerConfig.js file, which is the configuration file
  // for the load manager containing various settings, and can also override default
  // values for the loadManager, if this is required on special cases
  oes.loadManager.loadFile("loadManagerConfig.js", oes.loadManager._ownPath, function() {
    /** success loading config file, so this is either "dev" or "deploy"
     * NOTE: the configuration file must explicitly sets the codeLoadingMode parameter!
     **/
    // update progress bar
    oes.loadManager.updateProgressBar(10);
    // finished, now call the callback
    callback();
  }, function () {
    // failed, so threat this as "frameworkDev
    // NOTE: this is the default value anyway, but it is here
    //       for clarity reasons, and easy code debugging
    oes.loadManager.codeLoadingMode = "frameworkDev";
    // update progress bar
    oes.loadManager.updateProgressBar(10);
    // finished, now call the callback
    callback();
  });
};

/**
 * Preload all the needed files to run the specific simulation scenario.
 * It loads the minimum required, then analyze the scenario file and finally
 * load all the required CSS and JS files to be able to run the simulation.
 */
oes.loadManager.preload = function (callback) {
  var compSrc = oes.loadManager.components[oes.loadManager.codeLoadingMode],
    // oes.loadManager.basePath has priority´, allowing to override the location.
    basePath = oes.loadManager.basePath || compSrc.basePath,
    callback = typeof callback === "function" ? callback : function(){},
    scenarioFilePath = "./";
  oes.loadManager.showConfigInConsole();
  if (oes.loadManager.useScenarioId) scenarioFilePath = "./" + oes.loadManager.modelNameOrId + "/";
  oes.loadManager.progressIncStep = 40 / (compSrc.coreCssSrc.length + compSrc.coreJsSrc.length);
  // load simulator CSS core
  oes.loadManager.loadFileBatch(compSrc.coreCssSrc, basePath, function () {
    // load simulator JS core
    oes.loadManager.loadFileBatch( compSrc.coreJsSrc, basePath, function () {
      oes.loadManager.loadFile("metadata.js", scenarioFilePath, function () {
        // add the script element for simulation.js
        oes.loadManager.progressIncStep = oes.loadManager.getProgressBarValue() / 2 ;
        oes.loadManager.loadFile("simulation.js", scenarioFilePath, function (scenarioScriptEl) {
          oes.loadManager.loadScenarioPrerequisites( basePath, function () {
            // remove the script element containing simulation.js
            // because this needs to be latest to avoid any dependency errors
            document.head.removeChild( scenarioScriptEl);
            // clear the browser console.
            oes.loadManager.clearConsole();
            // add the script element for simulation.js
            oes.loadManager.loadFile("simulation.js", scenarioFilePath, function () {
              setTimeout( function () {
                // invoke success callback method
                callback();
                // call frontend initialization
                oes.setupFrontEndSimEnv();
                // callback at the end of pre-loading
                oes.loadManager.loadFinishedCallback();
              }, 1000);
            });
          });
        });
      });
    });
  });
};

/**
 * Investigate the simulation.js file and detects which of the additional
 * simulator components need to be loaded.
 * @param basePath
 *    specifies the root folder.
 * @param callback
 *    an optional callback function to be invoked at the end of the load.
 */
oes.loadManager.loadScenarioPrerequisites = function (basePath, callback) {
  var compSrc = oes.loadManager.components[oes.loadManager.codeLoadingMode];
  var compToLoad = [], modelFilesToLoad = [];
  var isGridSpace = false, detectedVisualisation = false;
  var modelFilePath = "";
  // no callback provided, define an empty function
  callback = callback || function () {};
  // the scenario file not loaded ?...
  if (!sim.scenario) throw "The 'simulation.js' file could not be loaded or it contains errors!";
  // model related dependencies
  if (sim.model) {
    // detect space type
    if (sim.model.space && sim.model.space.type) {
      compToLoad = compToLoad.concat(compSrc.coreSpace);
      // if "grid" is part of sim.model.space.type param, then we have a grid space
      if (sim.model.space.type.toLowerCase().indexOf("grid") !== -1) isGridSpace = true;
    }
    // detect statistics
    if (sim.model.statistics) {
      compToLoad = compToLoad.concat( compSrc.chartistStatVis);
    }
    // detect object type model files
    if (sim.model.objectTypeFilesInSubfolders &&
        Array.isArray(sim.model.objectTypeFilesInSubfolders))
      sim.model.objectTypeFilesInSubfolders.forEach( function (file) {
        if (file.endsWith(".js")) modelFilesToLoad.push(file);
        else modelFilesToLoad.push(file + ".js");
      });
    else if (sim.model.objectTypes && Array.isArray(sim.model.objectTypes))
      sim.model.objectTypes.forEach( function (objTypeName) {
        modelFilesToLoad.push(objTypeName + ".js");
      });
    // detect event type model files
    if (sim.model.eventTypeFilesInSubfolders &&
        Array.isArray(sim.model.eventTypeFilesInSubfolders))
      sim.model.eventTypeFilesInSubfolders.forEach( function (file) {
        if (file.endsWith(".js")) modelFilesToLoad.push(file);
        else modelFilesToLoad.push(file + ".js");
      });
    else if (sim.model.eventTypes && Array.isArray(sim.model.eventTypes)){
      sim.model.eventTypes.forEach(
          function (evtTypeName) {modelFilesToLoad.push(evtTypeName + ".js");});
    }
    // detect activity type model files
    if (sim.model.activityTypeFilesInSubfolders && Array.isArray(sim.model.activityTypeFilesInSubfolders))
      sim.model.activityTypeFilesInSubfolders.forEach( function (file) {
        if (file.endsWith(".js")) modelFilesToLoad.push(file);
        else modelFilesToLoad.push(file + ".js");
      });
    else if (sim.model.activityTypes && Array.isArray(sim.model.activityTypes))
      sim.model.activityTypes.forEach( function (activityTypeName) {
        modelFilesToLoad.push(activityTypeName + ".js");
      });
  }
  // observation UI related modules
  if (sim.config.observationUI.spaceView.type) {
    if (!sim.model.space.type) {
      // the space core needs to be loaded
      compToLoad = compToLoad.concat(compSrc.coreSpace);
    }
    // detect visualization module
    if (sim.config.observationUI.spaceView.type && sim.config.visualize) {
      switch (sim.config.observationUI.spaceView.type) {
        case "oneDimSVG":
          compToLoad = compToLoad.concat(compSrc.oneDimSvgVis);
          detectedVisualisation = true;
          break;
        case "Isometric2D":
          compToLoad = compToLoad.concat(compSrc.phaserVis);
          detectedVisualisation = true;
          break;
        case "threeDim":
          compToLoad = compToLoad.concat(compSrc.babylonVis);
          detectedVisualisation = true;
          break;
      }
    }
  }
  // for grid space, if spaceView.type is defined,
  // then use gridDom as default visualization
  if (isGridSpace && !detectedVisualisation && sim.config.visualize)
    compToLoad = compToLoad.concat( compSrc.gridDomVis);
  oes.loadManager.progressIncStep = 30 / (compToLoad.length + modelFilesToLoad.length);
  // load prerequisites
  if (oes.loadManager.useScenarioId) modelFilePath = "./" + oes.loadManager.modelNameOrId + "/";
  console.log(modelFilePath)
  oes.loadManager.loadFileBatch( compToLoad, basePath, function () {
    // load additional model files
    oes.loadManager.loadFileBatch( modelFilesToLoad, modelFilePath, callback);
  });
};

/**
 * Takes care of loading a specific JS or CSS file. This means to create
 * the script or link element within the DOM header.
 * @param pathAndFilename
 *    the file to be "loaded" - absolute or relative path.
 * @param basePath
 *    specifies the root folder.
 * @param callback
 *    an optional callback function to be invoked at the end of the load.
 *    Callback parameter is the created script or link element reference.
 * @param errCallback
 *    an optional callback function to be invoked if errors occurred
 *    during the load.
 */
oes.loadManager.loadFile = function (pathAndFilename, basePath, callback, errCallback) {
  var loadEl = null;
  var jsFileExt = /(.js)$/i, cssFileExt = /(.css)$/i;
  var origFName = pathAndFilename;
  
  var appendQueryParams = function (pfn) {
    if (oes.loadManager.queryParams["local"]) {
      if (pfn.indexOf("?") > -1) pfn += "&local=true";
      else pfn += "?local=true";
    }
    return pfn
  };
  // if a full URL is provided, the base path is ignored
  if (pathAndFilename.indexOf("://") === -1)
    pathAndFilename = basePath + pathAndFilename;
  // no callback(s) provided, define an empty function
  callback = typeof callback === "function" ? callback : function () {};
  errCallback = typeof errCallback === "function" ? errCallback
    : function () {};
  if (jsFileExt.test(pathAndFilename)) {
    loadEl = document.createElement('script');
    loadEl.src = appendQueryParams(pathAndFilename);
  } else if (cssFileExt.test(pathAndFilename)) {
    loadEl = document.createElement('link');
    loadEl.rel = 'stylesheet';
    loadEl.type = 'text/css';
    loadEl.href = appendQueryParams(pathAndFilename);
  } else {
    throw "oes.loadManager.loadFile: only 'js' and 'css' files are supported! The required '"
      + pathAndFilename + "' file has a wrong extension!";
  }
  if (loadEl) {
    loadEl.onload = function () {
      oes.loadManager.updateProgressBar( oes.loadManager.progressIncStep, true);
      callback(loadEl);
    };
    loadEl.onerror = function (e) {
      // not finding the loadManagerConfig.js file is not an error...
      if (pathAndFilename.indexOf("loadManagerConfig.js") === -1) {
        console.log("loadManager: failed to load file '" + pathAndFilename + "'!");
      }
      document.head.removeChild(loadEl);
      oes.loadManager.progressBarUpdateInfo("The file: '" + pathAndFilename + "' was not found!", true);
      errCallback(e);
    };
    document.head.appendChild( loadEl);
    oes.loadManager.progressBarUpdateInfo("Loading: " + origFName);
  }
};

/**
 * Load a batch of CSS and JS files
 * The loading is done in a synchronous mode - that means files are loaded in order.
 * NOTE: check if makes sense to use an async loading (does this breaks the simulation ?)
 *
 * @param filesToLoad
 *    a list of files to be "loaded".
 * @param basePath
 *    specifies the root folder.
 * @param callback
 *    an optional callback function to be invoked at the end of the load.
 */
oes.loadManager.loadFileBatch = function( filesToLoad, basePath, callback) {
  // no callback provided, define an empty function
  callback = callback || function () {};
  if(filesToLoad.length < 1) callback();
  else {
    setTimeout(function() { // very light delay so that the progress bar is visible
      oes.loadManager.loadFile(filesToLoad.splice(0, 1)[0], basePath, function() {
        oes.loadManager.loadFileBatch(filesToLoad, basePath, callback);
      });
    }, 0);

  }
};

/**
 * Clear the browser console. THis is required since during the preload time,
 * some files contains partial missing references. While these are not fatal
 * errors, they appear in the console, and lets the feeling that something
 * is bad, while is not really...
 * NOTE: use this method only if you know what you are doing.
 */
oes.loadManager.clearConsole = function () {
  /******************************************************************
   ***** Experimental code used to clear browser console *****
   * NOTE: this code may require some special attention, but for now
   *       it is used to delete the residual errors shown in the
   *       browser console as the result of having loaded the
   *       simulation.js
   *       to detect model files and features, but without having
   *       yet loaded all the resource files (since are unknown at this moment).
   ******************************************************************/
  console.API;
  if (typeof console._commandLineAPI !== 'undefined')
    console.API = console._commandLineAPI; //chrome
  else if (typeof console._inspectorCommandLineAPI !== 'undefined')
    console.API = console._inspectorCommandLineAPI; //Safari
  else if (typeof console.clear !== 'undefined')
    console.API = console;
  console.API.clear();
  // display debug information
  oes.loadManager.showConfigInConsole();
};

/**
 * Create the load progress bar.
 */
oes.loadManager.createProgressBar = function () {
  var progressContainer = document.createElement("div"),
    progress = document.createElement("progress"),
    progressTitle = document.createElement("p"),
    progressInfo = document.createElement("p");
  var lmScripts = document.querySelectorAll("body > script");
  // the value for 100%
  progress.max = 100;
  // initial value
  progress.value = 0;
  // style the progress bar
  progress.style.width = "25em";
  progress.style.height = "1.7em";
  // set text for progress title element
  progressTitle.innerHTML = "Please wait, we are loading the simulation data...";
  // set properties for progress info element
  progressInfo.id="load-progress-info";
  // set required properties for the progress container
  progressContainer.id = "load-progress-container";
  progressContainer.append(progressTitle);
  progressContainer.append(progress);
  progressContainer.append(progressInfo);
  // style the progress container
  progressContainer.style.margin = "3em 1em";
  progressContainer.style.textAlign = "center";
  // append the progress bar before the script element
  // that loads/initializes the load manager
  if (lmScripts[0])
    document.body.insertBefore(progressContainer, lmScripts[0]);
  else
    document.body.append(progressContainer);
};

/**
 * Remove the progress bar from the DOM
 */
oes.loadManager.removeProgressbar = function () {
  var progressContainer = document.getElementById("load-progress-container");
  if (progressContainer) 
    progressContainer.parentNode.removeChild(progressContainer);
};

/**
 * Update the status of the progress bar.
 * @param value the actual progress value (0 to 100)
 * @param incrementOnly a flag indicating that the value is an increment for the current value
 */
oes.loadManager.updateProgressBar = function (value, incrementOnly) {
  var progress = document.querySelector("#load-progress-container > progress");
  if (progress) {
    if (typeof value === "number") {
      if (incrementOnly === true)
        progress.value = Math.min(progress.value + value, 100);
      else progress.value = Math.min( Math.max(value, 0), 100);
    }
  }

};

/**
 * Get the current value for the progress bar
 */
oes.loadManager.getProgressBarValue = function () {
  var progress = document.querySelector("#load-progress-container > progress");
  if (progress) return progress.value;
  else return -1;
};
/**
 * Get the current value for the progress bar
 * @param message the message to display
 * @param isError specifies if the message is an error message
 */
oes.loadManager.progressBarUpdateInfo = function (message, isError) {
  var infoEl = document.querySelector("#load-progress-info");
  if (!infoEl) return;
  else if (isError === true) infoEl.style.color = "red";
  else infoEl.style.color = null;
  infoEl.innerHTML = message;
};

// trigger preload when DOM loading is complete
window.addEventListener("load", function () {
  // Setup the load manager, and when ready,
  // start loading the CSS and JS files.
  // Finally, remove the progress bar HTML content.
  oes.loadManager.setup( function () {
    oes.loadManager.preload( oes.loadManager.removeProgressbar);
  });
});
