/**
 * @fileOverview Create a DOM view of a (2-dimensional) object grid.
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.space = oes.ui.space || {};
oes.ui.space.grid = {
  i: {},  // namespace object for integer grid rendering features
  o: {objectViews: {}} ,  // namespace object for object grid rendering features
  // style defaults
  gridCellSize: 3,
  gridCellValueColors: ["white","blue","red","green","brown","grey"],
};
/**
 * Creates a DOM table structure for visualizing a simple grid
 */
oes.ui.space.grid.setup = function (containerEl) {
  var xMax = sim.model.space.xMax,
      yMax = sim.model.space.yMax;
  var rowEl=null, i=0, j=0, size=0;
  var gridTableEl = dom.createElement("table", {id:"visCanvas"});
  var styleEl = document.createElement("style");
  if (sim.config.observationUI && sim.config.observationUI.spaceView)
    size = sim.config.observationUI.spaceView.gridCellSize;
  size = size || oes.ui.space.grid.gridCellSize;
  if (typeof size === "function") size = parseInt( size());
  // assign the correct PositiveInteger value for the grid cell size
  oes.ui.space.grid.gridCellSize = parseInt( size);
  styleEl.innerHTML = "table#visCanvas td {width:" + size +
      "px; height:" + size + "px; " + "font-size:" + (size-4) +
      "px; line-height:" + size + "px;}";
  document.head.appendChild( styleEl);
  if (containerEl) containerEl.appendChild( gridTableEl);
  else document.body.appendChild( gridTableEl);
  // set sim.visualEl
  sim.visualEl = gridTableEl;
  for (i=0; i < yMax; i++) {
    rowEl = gridTableEl.insertRow();
    for (j=0; j < xMax; j++) {
      rowEl.insertCell();
    }
  }
};
/**
 * Reset the grid DOM element for visualizing a grid space
 * by clearing the contents of the grid table
 */
oes.ui.space.grid.reset = function () {
  var xMax = sim.model.space.xMax,
      yMax = sim.model.space.yMax;
  var rowEl=null, i=0, j=0;
  sim.visualEl.innerHTML = "";
  for (i=0; i < yMax; i++) {
    rowEl = sim.visualEl.insertRow();
    for (j=0; j < xMax; j++) {
      rowEl.insertCell();
    }
  }
};


/**
 * @fileOverview Create a DOM view of a (2-dimensional) integer grid.
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
/**
 * Visualizes an integer grid in the form of an HTML table DOM object.
 * The row/column table cell position (r,c) corresponds to the grid coordinates
 * (yMax-r, c+1) or to the integer grid array index (yMax-r-1)*xMax + c.
 */
oes.ui.space.grid.i.dom = {};
oes.ui.space.grid.i.dom.renderIntegerGrid = function () {
  var r=0, c=0;  // row/column
  var v=0;
  var xMax = sim.model.space.xMax,
      yMax = sim.model.space.yMax;
  var cells=null, rows = sim.visualEl.rows;
  var colors = sim.config.observationUI.gridCellValueColors ||
      oes.ui.space.grid.gridCellValueColors;
  for (r=0; r < yMax ; r++) {
    cells = rows[r].cells;
    for (c=0; c < xMax; c++) {
      v = sim.space.grid[(yMax-r-1)*xMax + c] & 15;  // lower 4 bits
      if (v > 0) cells[c].style.backgroundColor = colors[v];
      else cells[c].removeAttribute("style");
      // display cell value
      v = (sim.space.grid[(yMax-r-1)*xMax + c] & 240)/16;  // upper 4 bits
      if (v>0) cells[c].textContent = String(v);
    }
  }
};


/**
 * @fileOverview Create a DOM view of a (2-dimensional) object grid.
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner, Mircea Diaconescu
 * @license The MIT License (MIT)
 */
oes.ui.space.grid.o.dom = {
  // store the pre-processed grid cell color definition.
  // It is a function that is constructed based on the view parameters
  // NOTE: initialization happens later (check setup method(s), because
  //       the scenario object is not available initialized when this
  //       specific piece of code is executed!
  getGridCellColor: function () {}
};
oes.ui.space.grid.o.dom.setupObjectGrid = function () {
  var obsUI = null;
  var r=0, c=0,  // row/column
      xMax=sim.model.space.xMax,
      yMax=sim.model.space.yMax;
  var cellEl = null;
  var createOnMouseEnterCellHandler = null,
      createOnMouseExitsCellHandler = null;
  // setupGrid call results in creating the 
  // table and table cells required for space rendering.
  //TODO: maybe generalize this as common "setup"?
  oes.ui.space.grid.setup();
  // initialize space view
  oes.ui.space.grid.o.dom.getGridCellColor = oes.ui.space.grid.o.dom.processColor(
      sim.config.observationUI.spaceView.gridCellColor);
  // initialize object views
  if (sim.config.observationUI) {
    obsUI = sim.config.observationUI;
    if (typeof obsUI.objectViews) oes.ui.space.grid.o.dom.createObjectViews();
    else oes.ui.space.grid.o.dom.renderObjects = function(){};
    if (!obsUI.spaceView || !obsUI.spaceView.showGridCellInfoOnFlyOver) {
      oes.ui.space.grid.o.dom.showGridCellsInfoOnFlyOver = function (){};
    }
    if (sim.config.observationUI.spaceView.showGridCellInfoOnFlyOver) {
      createOnMouseEnterCellHandler = function (col, row) {
        return function() {
          var gridCell = sim.space.grid[col][row];
          var tableCell = sim.visualEl.rows[row].cells[col];
          var objIdStr = tableCell.getAttribute("data-objectId");
          if (objIdStr) tableCell.title =
            oes.ui.space.grid.o.dom.getFlyOverInfoForObject(sim.objects[objIdStr]);
          else tableCell.title =
            oes.ui.space.grid.o.dom.getFlyOverInfoForGridCell(gridCell);
        }
      };
      createOnMouseExitsCellHandler = function (col, row) {
        return function() {
          var gridCell = sim.space.grid[col][row];
          sim.visualEl.rows[row].cells[col].removeAttribute("title");
        }
      };
      for (r = 0; r < yMax; r++) {
        for (c = 0; c < xMax; c++) {
          cellEl = sim.visualEl.rows[r].cells[c];
          // attach mouse enter event for showing fly-over info if is the case
          cellEl.addEventListener("mouseenter", createOnMouseEnterCellHandler(c, r));
          // attach mouse exit event for showing fly-over info if is the case
          cellEl.addEventListener("mouseout", createOnMouseExitsCellHandler(c, r));
        }
      }
    }
  }
};

/**
 * Visualizes an object grid in the form of an HTML table DOM object.
 * The row/column table cell position (r,c) corresponds to the grid
 * coordinates (yMax-r, c+1).
 */
oes.ui.space.grid.o.dom.renderObjectGrid = function () {
  var r=0, c=0,  // row/column
      xMax=sim.model.space.xMax,
      yMax=sim.model.space.yMax;
  var cellElems=null, cell=null, cellEl=null,
      rows=sim.visualEl.rows;
  var bgColor = "";
  for (r=0; r < yMax ; r++) {
    cellElems = rows[r].cells;
    for (c=0; c < xMax; c++) {
      cell = sim.space.grid[c][r];
      cellEl = cellElems[c];
      // compute the background color and assign it to grid cell
      bgColor = oes.ui.space.grid.o.dom.getGridCellColor(cell);
      if (bgColor) cellEl.style.backgroundColor = bgColor;
      else cellEl.removeAttribute("style");
    }
  }
  // render objects
  oes.ui.space.grid.o.dom.renderObjects();
};

/**
 * Given a color description {H:..., S:..., L:...} or 
 * {R:..., G:..., B:..., A:...}, construct the HSL or RGB CSS style value.
 *
 * @param cDef
 *    the color description (e.g., a gridCellColor definition)
 * @return hsl(h, s, l) or rgb(r, g, b) or rgba(r, g, b, a) CSS style value
 */
oes.ui.space.grid.o.dom.processColor = function (cDef) {
  var n=0, resColor=[], tColor =[], i=0;
  // no color definition provided - default is opaque gray
  if(!cDef) return function () {return "rgb(191, 191, 191)";};
  // CSS Color String (color name or any other CSS accepted color format)
  if (typeof cDef === "string") return function () {return cDef};
  // custom function (it should return a CSS accepted color format)
  if (typeof cDef === "function") return function (o) {return cDef(o);};
  // CSS color in HSL or RGB(A) format
  tColor[0] = cDef.H || cDef.R || 0;  // R or H channel
  tColor[1] = cDef.S || cDef.G || 0;  // G or S channel
  tColor[2] = cDef.L || cDef.B || 0;  // B or L channel
  tColor[3] = resColor[3] = cDef.A || 1; // alpha channel for RGBA
  n = cDef.A || cDef.A === 0 ? 4 : 3;
  for (i = 0; i < n; i++) {
    // user defined custom function f(o)
    if (typeof tColor[i] === "function") {
      resColor[i] = function (idx) {
        return function (o) {
          return idx === 3 ? tColor[idx](o) : parseInt(tColor[idx](o));
        }
      }(i);
    }
    // property name (use its value)
    else if (typeof tColor[i] === "string")
      resColor[i] = function (idx) {
        return function (o) {
          return idx === 3 ? o[tColor[idx]] : parseInt(o[tColor[idx]]);
        }
      }(i);
    // [prop-name, function(x, o) {...}] 
    else if (Array.isArray(tColor[i])) {
      resColor[i] = function (idx) {
        var pName = tColor[idx][0],
            func = tColor[idx][1];
        return function (o) {
          if (o[pName] !== undefined && typeof func === "function")
            return idx === 3 ? func(o[pName], o) : parseInt(func(o[pName], o));
          else return 0;
        }
      }(i);
    } 
    // a numeric value is given
    else if (typeof tColor[i] === "number") {
      resColor[i] = function (idx) {
        return function () {
         return idx === 3 ? tColor[idx] : parseInt(tColor[idx]);
        }
      }(i);
    }
    else console.log("oes.ui.space.grid.o.dom.processColor: "
      + "Unsuported color computation method.", cDef, tColor[i]);
  }
  if (cDef.H !== undefined && cDef.S !== undefined && cDef.L !== undefined) {
    return function (o) {
      return "hsl(" + resColor[0](o) + "," + resColor[1] (o)
                      + "%," + resColor[2](o) + "%)";
    }       
  } else if ((cDef.R !== undefined && cDef.G !== undefined && cDef.B !== undefined)) {
    if (typeof resColor[3] !== "function") resColor[3] = function () {return 1;};
    return function (o) {
      return "rgba(" + resColor[0](o) + "," + resColor[1](o) + "," 
                        + resColor[2](o) + "," + resColor[3](o) + ")";
    }
  } else return function () {return "rgb(191, 191, 191)";};  // default: opaque gray
};

/**
 * Create the info for the grid cell which is shown when fly over.
 * NOTE: this method is set to an empty function in 
 *       oes.ui.space.grid.o.dom.setupObjectGrid, if the
 *       showGridCellInfoOnFlyOver flag was not set!
 * @param cell 
 *    the grid cell for which to creat the info
 */
oes.ui.space.grid.o.dom.getFlyOverInfoForGridCell = function (cell) {
  var gCPI = "";
  Object.keys(cell).forEach(function (p) {
    if (p !== "objects")
      gCPI += p + ": " + cell[p] + "\n";
  });
  return gCPI;
};


/**
 * Process object views description, and create simplified form if views  
 * are attached to the objects, for later rendering.
 */
oes.ui.space.grid.o.dom.createObjectViews = function () {
  var objViews = null;
  // initialize object views
  if (sim.config.observationUI && sim.config.observationUI.objectViews) {
    objViews = sim.config.observationUI.objectViews;
    Object.keys(sim.objects).forEach(function (id) {
      var obj = sim.objects[id];
      var viewDef = objViews[id] || objViews[obj.constructor.Name];
      // store the view processed definition
      if (viewDef)
        // TODO: use the corresponding cell max cardinality parameter
        // instead of 999, as the third parameter for createObjectView method!
        oes.ui.space.grid.o.objectViews[String(obj.id)] =
            oes.ui.space.grid.o.dom.createObjectView(obj, viewDef,
              sim.model.space.gridCellMaxOccupancy);
    });
  }  
};
/**
 * Create an object view for a given object and an associated view definition.
 * In the gridOfObjectsDom visualization of a grid with one object per cell,
 * an object view consists of the cell's character content, while the cell
 * is visualized with a background-color or background-image. In the case of
 * multiple objects per cell, an object view consists of of a div element
 * object (with all its parameter settings) as a child element of the cell.
 *
 * @param obj
 *    the object for which the view is processed
 * @param objViewDef
 *    the view definition
 * @param objNmrInOneCell
 *    the maximum number of objects allowed in one grid gell
 * return the view object, containing the associated dom element and 
 *        a set of computation methods for properties like color and bg-color
 */
oes.ui.space.grid.o.dom.createObjectView = function (obj, objViewDef, objNmrInOneCell) {
  var content = objViewDef.content || "";
  var processColor = oes.ui.space.grid.o.dom.processColor;
  var computeBackgroundColor = null, computeColor = null;
  var yMax=sim.model.space.yMax;
  var rows = sim.visualEl.rows,
    tableCell = rows[yMax-obj.pos[1]].cells[obj.pos[0]-1];
  var viewEl = null, processedView = {};
  if (typeof content === "function")
    content = content(obj);
  // 1. Maximum one object is allowed for every grid cell
  //    The table cell content (text) represents the object
  if (objNmrInOneCell === 1) {
    viewEl = tableCell;
    viewEl.innerHTML = content;
  }
  // 2. More than one object is allowed for every grid cell
  //    A div child element of the table cell represents the object
  else {
    viewEl = dom.createElement("div", {
      content: content,
      classValues: "object-view"
    });
    tableCell.appendChild( viewEl);
  }
  viewEl.setAttribute("data-objectId", obj.id);

  if (objViewDef.backgroundColor) {
    computeBackgroundColor = processColor( objViewDef.backgroundColor);
  }
  if (objViewDef.color) {
    computeColor = processColor( objViewDef.color);
  }
  // roundedCorners does not change, so we can directly 
  // assign it to the DOM element style.
  if (parseInt(objViewDef.roundedCorners) > 0) {
    viewEl.style.borderRadius = objViewDef.roundedCorners;
  }
  processedView.domEl = viewEl;
  processedView.computeBackgroundColor = computeBackgroundColor;
  processedView.computeColor = computeColor;
  // display/update fly-over info when mouse enters the space of
  // the object DOM element, and clear the info when mouse is out
  if (objViewDef.showObjectInfoOnFlyOver) {
    // attach mouse enter event for showing fly-over info if is the case
    viewEl.addEventListener("mouseenter", function () {
      var o = sim.objects[viewEl.getAttribute("data-objectId")];
      if (o) {
        processedView.showFlyOverInfo = true;
        viewEl.title = oes.ui.space.grid.o.dom.getFlyOverInfoForObject(o);
      }
    });
    // attach mouse exit event for showing fly-over info if is the case
    viewEl.addEventListener("mouseout", function () {
      processedView.showFlyOverInfo = false;
      viewEl.removeAttribute("title");
    });
  }
  return processedView;
};

/**
 * Create the information to be used as fly over
 * for a specified object. Mainly, this is a collection
 * of property-value pairs.
 * @param o
 *    the object to create the fly-over information for
 * @returns {string}
 *    the string serialization of the fly-over information
 */
oes.ui.space.grid.o.dom.getFlyOverInfoForObject = function (o) {
  var info = "type: " + o.constructor.Name + "\n";
  Object.keys(o).forEach(function (p) {
    info += p + ": " + o[p] + "\n";
  });
  return info;
};

/**
 * Render an object in the grid.
 * @TODO: since objects are in the cell objects list, this list must be updated 
 *        whenever an object change its position, or when an object is created 
 *        or destroyed. For now, only color and on-fly-over changes are implemented!
 */
oes.ui.space.grid.o.dom.renderObjects = function () {
  var views = oes.ui.space.grid.o.objectViews;
  var objects = sim.objects;
  var getFlyOverObjInfo = oes.ui.space.grid.o.dom.getFlyOverInfoForObject;
  Object.keys( oes.ui.space.grid.o.objectViews).forEach( function (id) {
    var view = views[id], o = objects[id];
    view.domEl.style.backgroundColor = view.computeBackgroundColor(o);
    view.domEl.style.color = view.computeColor(o);
    // NOTE: sometimes there are strange behaviors, since we can see
    // the title value updated in the DOM inspector, but the browsers
    // still shows the old value, until moving the mouse a little over the element...
    if (view.showFlyOverInfo) view.domEl.title = getFlyOverObjInfo(o);
  });
};