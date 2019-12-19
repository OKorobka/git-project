/**
 * Translation of sims/:simno/index.html files
 */
oes.ui.i18n = oes.ui.i18n || {};
sim.scenario.i18n = sim.scenario.i18n || {};

var i18n = {
  supportedLangFamilies: ["en", "de", "zh"],
  docLocale: document.documentElement.lang
};
i18n.accessURL = new URL( window.location.href);
i18n.accessLang = i18n.accessURL.searchParams.get("lang");
i18n.t = function (txt) {
  var trans1 = oes.ui.i18n.translations,
      trans2 = sim.scenario.i18n.translations;
  if (trans1 && txt in trans1) return trans1[txt];
  else if (trans2 && txt in trans2) return trans2[txt];
  else return txt;
};

/**
 * Load a script
 * @param {Array} arr - An array of arrays of values to be combined
 */
i18n.loadScript = function (filePath) {
  return new Promise( function (resolve, reject) {
    var scriptElem = document.createElement('script');
    scriptElem.onload = resolve;
    scriptElem.onerror = reject || function (e) {
      console.log("Failed loading file '" + filePath + "'!");
      scriptElem.remove();
    };
    // trigger the file loading
    scriptElem.src = filePath;
    // append element to head
    document.head.appendChild( scriptElem );
  });
};

/**
 * Create the Front Matter: the UI page header and title (with a link to the description page).
 */
(function () {
  var metaDataPath="", metaDataFileURL="", descrFileURL="",
      accessURL = i18n.accessURL.href,  // e.g., "https://sim4edu.com/sims/2"
      pos = accessURL.indexOf("/sims"),
      firstPart = accessURL.substring( 0, pos),
      secondPart = accessURL.substring( pos);
  var filterDivEl = document.createElement("div"),  // for filtering the text content
      frontMatterEl = document.querySelector("#frontMatter"),
      pageTitleEl = document.querySelector("#frontMatter h1"),
      mainEl = document.querySelector("body > main");
  if (secondPart.indexOf("?") > -1) {
    secondPart = secondPart.substring( 0, secondPart.indexOf("?"));
  }
  if (!pageTitleEl) {
    pageTitleEl = document.createElement("h1");
    if (!frontMatterEl) {
      frontMatterEl = document.createElement("div");
      frontMatterEl.id = "frontMatter";
      mainEl.insertBefore( frontMatterEl, mainEl.firstElementChild);
    }
    frontMatterEl.insertBefore( pageTitleEl, frontMatterEl.firstElementChild);
  }
  if (i18n.accessLang) {
    i18n.accessLang = i18n.accessLang.substring(0,2);  // use language family
    if (i18n.accessLang !== "en" && i18n.supportedLangFamilies.includes( i18n.accessLang)) {
      document.documentElement.lang = i18n.accessLang;  // indicate the delivered language
      if (secondPart.indexOf(".") > 0) {
         metaDataPath = secondPart.replace(/(\w+)\.(\w+)/, "metadata.js");
      } else {
        metaDataPath = secondPart + "/metadata.js";
      }
      metaDataFileURL = firstPart +"/"+ i18n.accessLang + metaDataPath;
      descrFileURL = metaDataFileURL.replace(/(\w+)\.(\w+)/, "description.html");
      i18n.loadScript( metaDataFileURL).
      then( function () {
        var filePath = firstPart +"/"+ i18n.accessLang + "/i18n-translations.js";
        return i18n.loadScript( filePath);
      }).then( function () {
        var filePath = metaDataFileURL.replace(/(\w+)\.(\w+)/, "i18n-translations.js");
        return i18n.loadScript( filePath);
      }).catch( function (err) {
        if (!sim.scenario.i18n.translations) {
          console.log("No model-specific translation file found in "+
              metaDataPath.replace(/(\w+)\.(\w+)/, ""));
        }
        if (!oes.ui.i18n.translations) {
          console.log("No translation file found for "+ i18n.accessLang);
        }
      }).then( function () {
        var simTitle = String( sim.scenario.title || sim.model.title),
            modelBtnElems = document.getElementById("model-menu").children,
            i=0;
        if (simTitle.length > 38) pageTitleEl.style.fontSize = "1.4em";
        document.getElementById("sim4eduinfo").innerHTML = i18n.t("sim4eduinfo");
        pageTitleEl.innerHTML = "<span>"+ simTitle +"</span>";
        if (pageTitleEl.querySelectorAll("a").length === 0) {
          pageTitleEl.innerHTML += "<a href='../../"+ i18n.accessLang +
              secondPart.replace(/(\w+)\.(\w+)/, "description.html") + "'>"+ i18n.t("Read more...") +"</a>";
          filterDivEl.innerHTML = sim.scenario.shortDescription || sim.model.shortDescription;
          pageTitleEl.title = filterDivEl.textContent;
        }
        for (i=0; i < modelBtnElems.length; i++) {
          modelBtnElems[i].textContent = i18n.t( modelBtnElems[i].textContent);
        }
      });
    }
  } else {  // no translation
    if (!pageTitleEl.textContent) {
      pageTitleEl.innerHTML = "<span>"+ String( sim.scenario.title || sim.model.title) +"</span>";
    }
    if (pageTitleEl.querySelectorAll("a").length === 0) {
      pageTitleEl.innerHTML += "<a href='description.html'>Read more...</a>";
    }
    filterDivEl.innerHTML = sim.scenario.shortDescription || sim.model.shortDescription;
    pageTitleEl.title = filterDivEl.textContent;
  }
})();
