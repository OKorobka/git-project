/**
 * Configuration file for the Load manager.
 * Configuration parameters :
 *  1) oes.loadManager.basePath = "relative-path-to-oes-distribution-folder"
 *       relative path to the location of the oes distribution folder (where the 
 *       simulator core and all the module files are located). The path is relative 
 *       to the location of the HTML file that loads the "loadManager.js" script file,
 *       so to the location of simulation.html and/or description.html file.
 *  2) oes.loadManager.codeLoadingMode = "one-of: {frameworkDev, dev, deploy}"
 *       default value is "frameworkDev", but for this case a loadManagerConfig.js/oes/
 *       file is not required and no configuration should be made anyway.
 *  3) oes.loadManager.simsUrlIdentifier = "optional-sims-folder-identifier";
 *       defaults to "sims", but for the "dev" mode the best ideea is to keep it "" 
 *       so the loadManager auto-detects this value.
 *
 * NOTE: for oes.loadManager.codeLoadingMode = "frameworkDev" this configuration file is not required!
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @license The MIT License (MIT)
 */

// NOTE: configuration is different for various environment and needs 
//       to be updated accordingly.


/******* Configuration for simulation development ****************/
//oes.loadManager.basePath = "../framework/";
oes.loadManager.codeLoadingMode = "dev";
oes.loadManager.simsUrlIdentifier = "";