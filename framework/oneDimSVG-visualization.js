/**
* SVG library
* @author Gerd Wagner
*/
var svg = {
  NS: "http://www.w3.org/2000/svg",  // namespace
  XLINK_NS: "http://www.w3.org/1999/xlink",
  /**
  * Create an SVG element
  * 
  * @param {object} params  a lsit of optional parameters
  * @return {node} svgElement
  */
  createSVG: function (params) {
    var el = document.createElementNS( svg.NS,"svg");
    el.setAttribute("version", "1.1");
    if (params.id) el.id = params.id;
    if (params.class) el.class = params.class;
    if (params.width) el.setAttribute("width", params.width);
    if (params.height) el.setAttribute("height", params.height);
    if (params.viewBox) el.setAttribute("viewBox", params.viewBox);
    return el;
  },
  createDefs: function () {
    return document.createElementNS( svg.NS,"defs");
  },
  setOptionalAttr: function (el, optParams) {
    if (optParams === undefined) optParams = {};
    if (optParams.id) el.id = optParams.id;
    if (optParams.class) el.class = optParams.class;
    el.setAttribute("stroke", optParams.stroke || "black");
    el.setAttribute("stroke-width", optParams.strokeWidth || "1");
    el.setAttribute("fill", optParams.fill || "white");
  },
  /**
  * Create a rect element
  * 
  * @param {number} x 
  * @param {number} y 
  * @param {number} width 
  * @param {number} height 
  * @param {object} optParams 
  *
  * @return (object)
  */
  createRect: function (x, y, width, height, optParams) {
    var el = document.createElementNS( svg.NS,"rect");
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("width", width);
    el.setAttribute("height", height);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Create a circle element
  * 
  * @param {number} x 
  * @param {number} y 
  * @param {number} width 
  * @param {number} height 
  * @param {string} color 
  *
  * @return (object)
  */
  createCircle: function ( cx, cy, r, optParams) {
    var el = document.createElementNS( svg.NS,"circle");
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", r);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
   * Create a line element 
   * 
   * @param {number} x1 
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {string} color  the stroke color
   * @param {number} width 
   * @return {object}
   */
  createLine: function (x1, y1, x2, y2, optParams) {
    var el = document.createElementNS( svg.NS,"line");
    el.setAttribute("x1", x1);
    el.setAttribute("y1", y1);
    el.setAttribute("x2", x2);
    el.setAttribute("y2", y2);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
   * Create a path element
   * 
   * @param {number} d  the path description
   * @param {string} color  the stroke color
   * @param {number} width  the stroke width
   * @return {object}
   */
  createPath: function (d, optParams) {
    var el = document.createElementNS( svg.NS,"path");
    el.setAttribute("d", d);
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Create a group element
  * 
  * @return gNode
  */
  createGroup: function (optParams) {
    var el = document.createElementNS( svg.NS,"g");
    svg.setOptionalAttr( el, optParams);
    return el;
  },
  /**
  * Function created for the node Text
  * @param {number} x start position
  * @param {number} y start position
  * @param {string} name the content of the node
  * @param {number} fontSize of the content
  * @param {string} color of the content
  * 
  * @return text object
  */
  createText: function ( x, y, txt, style) {
    var el = document.createElementNS( svg.NS,"text");
    el.textContent = txt;
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    if (style) el.style = style;  // el.setAttribute("style", style);
    return el;
  },
  createShape: function (shape, shapeAttributes, style, obj) {
    var el = document.createElementNS( svg.NS, shape);
    Object.keys( shapeAttributes).forEach( function (attrName) {
      var val;
      if (typeof shapeAttributes[attrName] === "function") {
        val = shapeAttributes[attrName](obj);
      } else val = shapeAttributes[attrName];
      el.setAttribute( attrName, val);
    })
    if (style) el.setAttribute("style", style);
    return el;
  },
  createShapeFromDefRec: function (shDefRec, obj) {
    var el = document.createElementNS( svg.NS, shDefRec.shapeName),
        shAttribs = shDefRec.shapeAttributes;
    Object.keys( shAttribs).forEach( function (attrName) {
      var val;
      if (typeof shAttribs[attrName] === "function") {
        val = shAttribs[attrName](obj);
      } else val = shAttribs[attrName];
      switch (attrName) {
      case "textContent":
        el.textContent = val;
        break;
      case "file":
        el.setAttributeNS( svg.XLINK_NS, "href", val);
        break;
      default:
        el.setAttribute( attrName, val);
        break;
      }
    })
    if (shDefRec.style) el.setAttribute("style", shDefRec.style);
    return el;
  },
  createImageFillPattern: function (id, file, optParams) {
    var patEl = document.createElementNS( svg.NS,"pattern"),
        imgEl = document.createElementNS( svg.NS,"image");
    if (!optParams) optParams = {};
    imgEl.setAttributeNS( svg.XLINK_NS, "href", file);
    imgEl.setAttribute("width", optParams.width || 20);
    imgEl.setAttribute("height", optParams.height || 20);
    patEl.appendChild( imgEl);
    patEl.id = id;
    patEl.setAttribute("patternUnits", "userSpaceOnUse");
    patEl.setAttribute("width", optParams.width || 20);
    patEl.setAttribute("height", optParams.height || 20);
    if (optParams.x) patEl.setAttribute("x", optParams.x);
    if (optParams.y) patEl.setAttribute("y", optParams.y);
    return patEl;
  }
};


/**
 * 2D visualization using Phaser API and the Phaser Isometric Plugin.
 *
 * Phaser: http://phaser.io/
 * Phaser Isometric Plugin: http://rotates.org/phaser/iso/
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @license The MIT License (MIT)
 */
var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.space = oes.ui.space || {};
oes.ui.space.oneDim = {
  SVG: {
    objectViewDefaultSize: 10,
    objectViewDefaultColors:["blue","green","yellow","red"]
  }
};

/**
 * Convert linear position to SVG coordinates
 * Convert linear position on the space view circle to radians, then convert
 * the polar coordinates to Cartesian coordinates with the circle's center as the
 * origin. Finally transform these coordinates to the view's SVG coordinates
 * (r, theta) [polar] = (r * cos(\theta), r * sin( theta)) [cartesian]
 * @method
 * @param pos  the object's position in 1D space
 */
oes.ui.space.oneDim.SVG.convertPos2SvgCoordinates = function (pos) {
  // convert linear position to corresponding angle in radians
  var theta = (pos % sim.spaceView.circumference) / sim.spaceView.r;
  // convert the polar coordinates to Cartesian coordinates
  var x = sim.spaceView.r * Math.cos( theta);
  var y = sim.spaceView.r * Math.sin( theta);
  // transform these coordinates to the view's SVG coordinates
  var svgX = x + sim.spaceView.cx;
  var svgY = sim.spaceView.cy - y;
  return [svgX,svgY];
};
/**
 * Render an initial object view.
 * @method
 * @param o  the object the view of which is to be rendered
 */
oes.ui.space.oneDim.SVG.renderInitialObjectView = function (o) {
  var svgCoord = this.convertPos2SvgCoordinates( o.pos[0]),
      fillColor = this.objectViewDefaultColors[o.id-1],
      radius = this.objectViewDefaultSize;
  // create object view element
  sim.objectViews[String(o.id)] = svg.createCircle( svgCoord[0], svgCoord[1],
      radius, {fill: fillColor});
  // render the newly created element
  sim.visualEl.appendChild( sim.objectViews[String(o.id)]);
};
/**
 * Update an object view element.
 * @method
 * @param o  the object the view element of which is to be updated
 */
oes.ui.space.oneDim.SVG.updateObjectView = function (o) {
  var svgCoord = this.convertPos2SvgCoordinates( o.pos[0]);
  sim.objectViews[String(o.id)].setAttribute("cx", svgCoord[0]);
  sim.objectViews[String(o.id)].setAttribute("cy", svgCoord[1]);
};
/**
 * Set up the initial SVG space view.
 * @method
 * @param containerEl  where the space view is created, if not provided,
 *                     use the document body
 */
oes.ui.space.oneDim.SVG.setup = function (containerEl) {
  var parentEl = null;
  var trackDiameter=0, computedStyle=null, radius=0;
  if (containerEl) parentEl = containerEl;
  else parentEl = document.body;
  // assign space view parameters
  if (sim.config.observationUI && sim.config.observationUI.spaceView) {
    if (sim.config.observationUI.spaceView.trackDiameter) {
      trackDiameter = sim.config.observationUI.spaceView.trackDiameter;
    } else {
      computedStyle = getComputedStyle( parentEl, null);
      trackDiameter = Math.floor( parseInt( computedStyle.getPropertyValue("width"))/2);
    }
  }
  radius = Math.floor( trackDiameter/2);
  sim.spaceView = {cx:radius+50, cy:radius+20, r:radius};
  sim.spaceView.circumference = 2 * Math.PI * sim.spaceView.r;
  // render initial space view
  sim.visualEl = svg.createSVG({width:trackDiameter+100, height:trackDiameter+50});
  sim.visualEl.appendChild(
      svg.createCircle( sim.spaceView.cx, sim.spaceView.cy, sim.spaceView.r,
          {stroke:"lightgrey", strokeWidth:"20"})
  );
  parentEl.appendChild( sim.visualEl);
  // render all initial object views
  Object.keys( ObjectInOneDimSpace.instances).forEach( function (objIdStr) {
    var obj = ObjectInOneDimSpace.instances[objIdStr];
    oes.ui.space.oneDim.SVG.renderInitialObjectView( obj);
  })
};

//TODO: needed?
oes.ui.space.oneDim.SVG.reset = function () {};

/**
 * Visualize the current simulation state
 */
oes.ui.space.oneDim.SVG.renderSimState = function () {
  var keys = Object.keys( ObjectInOneDimSpace.instances),
      i= 0, o=null, objIdStr="";
  for (i=0; i < keys.length; i++) {
    objIdStr = keys[i];
    o = ObjectInOneDimSpace.instances[objIdStr];
    oes.ui.space.oneDim.SVG.updateObjectView( o);
  }
};
