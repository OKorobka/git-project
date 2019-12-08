/**
 * @fileOverview Space library.
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
oes.space = {
  grid: {
    directions: ["N","NE","E","SE","S","SW","W","NW"],
    getRandomDirection: function () {return this.directions[rand.uniformInt(0,7)];},
    i: {},  // namespace object for integer grid features
    o: {}   // namespace object for object grid features
  },
  oneDim: {},
  twoDim: {},
  threeDim: {},
  dimensions: {"1D":1, "1D-Grid":1, "IntegerGrid":2, "ObjectGrid":2, "2D":2, "3D":3, "3D-Grid":3}
};

/**
 * Initialize the space object
 */
oes.space.initialize = function () {
  var space = sim.model.space;
  // set TOROIDAL as default geometry
  if (!space.geometry) space.geometry = "TOROIDAL";
  switch (space.type) {
  case "1D":
    break;  // nothing to do
  case "IntegerGrid":
    oes.space.grid.forAllCells = oes.space.grid.i.forAllCells;
    oes.space.grid.i.initialize( space.xMax, space.yMax);
    break;
  case "ObjectGrid":
    oes.space.grid.forAllCells = oes.space.grid.o.forAllCells;
    oes.space.grid.o.initialize( space.xMax, space.yMax);
    break;
  case "2D":
    if (space.overlayGridCellSize) {
      sim.space.overlayGrid.cellSize = space.overlayGridCellSize;
      oes.space.overlayGrid.initialize( space.xMax, space.yMax, sim.space.overlayGrid.cellSize);
    }
    break;
  }
};

/**
 * @fileOverview Integer Grid library.
 * In an integer grid, each grid cell contains an integer that is used for
 * representing its state. How this state is defined in terms of the available
 * bits is model-specific. An integer grid is implemented as a typed array of
 * 8-bit integers. The grid cell at (x,y) is represented by the array index
 * (y-1)*xMax + x-1.
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
/**
 * Initialize the object grid.
 */
oes.space.grid.i.initialize = function (xMax, yMax) {
  sim.space.grid = new Uint8Array( xMax * yMax);  // typed array
}
/**
 * Grid Cell Loop
 */
oes.space.grid.i.forAllCells = function (f) {
  var xMax = sim.model.space.xMax,
      yMax = sim.model.space.yMax,
      i=0, j=0;
  for (i=1; i <= yMax; i++) {
    for (j=1; j <= xMax; j++) {
      // call the method with coordinates and cell as parameters
      f(j,i,sim.space.grid[(i-1)*xMax + j-1]);
    }
  }
};
/**
 * Get the value/content of af grid cell
 */
oes.space.grid.i.getCellValue = function (x,y) {
  var xMax = sim.model.space.xMax;
  return sim.space.grid[(y-1)*xMax + x-1];
};
/**
 * Set the value/content of af grid cell
 */
oes.space.grid.i.setCellValue = function (x,y,z) {
  var xMax = sim.model.space.xMax;
  sim.space.grid[(y-1)*xMax + x-1] = z;
};
/**
 * Test if grid cell is free
 */
oes.space.grid.i.isFreeCell = function (x,y) {
  var xMax = sim.model.space.xMax;
  return sim.space.grid[(y-1)*xMax + x-1] === 0;
};
/**
 * Test if grid cell's bit 0 is set
 */
oes.space.grid.i.isSetBit0 = function (x,y) {
  var xMax = sim.model.space.xMax;
  return sim.space.grid[(y-1)*xMax + x-1] & 1;
};
/**
 * Set grid cell's bit 0
 */
oes.space.grid.i.setBit0 = function (x,y) {
  var xMax = sim.model.space.xMax;
  sim.space.grid[(y-1)*xMax + x-1] |= 1;  // ORing with 00000001
};
/**
 * Unset grid cell's bit 0
 */
oes.space.grid.i.unsetBit0 = function (x,y) {
  var xMax = sim.model.space.xMax;
  sim.space.grid[(y-1)*xMax + x-1] &= ~1;  // ANDing with the inverse of 00000001
};
/**
 * Get the number of neighbor cells with bit 0 set
 */
oes.space.grid.i.getNmrOfNeighborCellsWithBit0 = function (x,y) {
  var xMax = sim.model.space.xMax,
      yMax = sim.model.space.yMax,
      N=0, xE, xW, yN, yS;
  // compute N,E,S,W coordinates
  yN = y < yMax ? y+1 : 1;
  xE = x < xMax ? x+1 : 1;
  yS = y > 1 ? y-1 : yMax;
  xW = x > 0 ? x-1 : xMax;
  // get value of neighbor cell North
  N += sim.space.grid[(yN-1)*xMax + x - 1] & 1;
  // get value of neighbor cell North-East
  N += sim.space.grid[(yN-1)*xMax + xE - 1] & 1;
  // get value of neighbor cell East
  N += sim.space.grid[(y-1)*xMax + xE - 1] & 1;
  // get value of neighbor cell South-East
  N += sim.space.grid[(yS-1)*xMax + xE - 1] & 1;
  // get (type) value of neighbor cell South
  N += sim.space.grid[(yS-1)*xMax + x - 1] & 1;
  // get value of neighbor cell South-West
  N += sim.space.grid[(yS-1)*xMax + xW - 1] & 1;
  // get value of neighbor cell West
  N += sim.space.grid[(y-1)*xMax + xW - 1] & 1;
  // get value of neighbor cell North-West
  N += sim.space.grid[(yN-1)*xMax + xW - 1] & 1;
  return N;
};
/**
 * Find a free grid cell either close to given position
 * or close to a random position
 */
oes.space.grid.i.findFreeCell = function (pos) {
  var grid = sim.space.grid,
      xMax = sim.model.space.xMax,
      yMax = sim.model.space.yMax,
      x = pos ? pos[0] : rand.uniformInt(1,xMax),
      y = pos ? pos[1] : rand.uniformInt(1,yMax),
      c=0, r=0;  // col,row
  // make sure that grid cell is free
  while (sim.space.grid[(y-1)*xMax + x-1] > 0) {
    x = x < xMax ? x+1 : 1;  // choose next cell to the right
    c = c+1;  // count column shifts
    if (c >= xMax-1) {
      // when entire row populated, go one up
      y = y < yMax ? y+1 : 1;
      c = 0;
      r = r+1;  // count row shifts
    }
    if (r >= yMax-1) throw("Attempt to over-populate grid!");
  }
  return [x,y];
};
/**
 * Move a cell's value to a new position
 */
oes.space.grid.i.move = function (pos, newPos) {
  var xMax = sim.model.space.xMax,
      x = pos[0], y = pos[1],
      val = sim.space.grid[(y-1)*xMax + x-1];
  // mark old position in grid as free
  sim.space.grid[(y-1)*xMax + x-1] = 0;
  // assign new position in grid
  x = newPos[0]; y = newPos[1];
  sim.space.grid[(y-1)*xMax + x-1] = val;
};
/**
 * @fileOverview Object Grid library
 * In an object grid, grid cells may have properties, including the pre-defined
 * property "objects" containing zero or more object references
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */

/**
 * Initialize the object grid.
 */
oes.space.grid.o.initialize = function (xMax, yMax) {
  var grid = null, i = 0, j = 0;
  var GridCell = null;
  oes.space.grid.getCell = oes.space.grid.o.getCell;
  oes.space.grid.move = oes.space.grid.o.move;
  sim.space.grid = grid = new Array(xMax);  // 2D array of GridCell objects
  if (typeof sim.model.space.gridCellProperties === 'object') {
    // declare pre-defined grid cell properties "objects" and "pos"
    sim.model.space.gridCellProperties.objects = {
      range: Object, initialValue: {}
    };
    sim.model.space.gridCellProperties.pos = {
      range: Array, label: "Position"
    };
    GridCell = new cLASS({
      Name: "GridCell",
      properties: sim.model.space.gridCellProperties,
      methods: {
        "addObject": function (o) {
          o.pos = this.pos;
          this.objects[String(o.id)] = o;
        },
        "removeObject": function (o) {
          delete this.objects[String(o.id)];
        }
      }
    });
    for (i=0; i < xMax; i++) {
      grid[i] = new Array(yMax);
      for (j=0; j < yMax; j++)
        grid[i][j] = new GridCell({pos: [i+1, yMax-j]});
    }
  }
};
/**
 * Grid Cell Loop
 */
oes.space.grid.o.forAllCells = function (fun) {
  var xMax = sim.model.space.xMax,
      yMax = sim.model.space.yMax,
      i=0, j=0, c=null;
  for (i=1; i <= xMax; i++) {
    for (j=1; j <= yMax; j++) {
      c = oes.space.grid.o.getCell(i,j);
      // call the passed function with coordinates and cell as arguments
      fun( i, j, c);
    }
  }
};


/**
 * Move a cell's object to a new position
 */
oes.space.grid.o.move = function (pos, newPos) {
  // TODO: implement management of the objects in the cells lists.
};

/**
 * Get the value/content of af grid cell
 */
oes.space.grid.o.getCell = function (x,y) {
  return sim.space.grid[x-1][sim.model.space.yMax - y];
};

/**
 * @fileOverview Overlay Grid library.
 *  An overlay grid is a logical concept which allows to combine/overlay a continuous space
 *  with a grid space, by dividing it into cells of specified size.
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @license The MIT License (MIT)
 */

oes.space.overlayGrid = {};

oes.space.overlayGrid.initialize = function (xMax, yMax, cellSize) {
  var cellsOnX = 0, cellsOnY = 0;
  cellSize = cellSize || 1;
  // overlay logical grid space
  cellsOnX = parseInt( xMax / cellSize);
  cellsOnY = parseInt( yMax / cellSize);
  oes.space.grid.o.initialize(cellsOnX, cellsOnY);
};

/**
 * @param f
 *   the method that invoked for each cell
 * Grid Cell Loop in case of overlay space
 */
oes.space.overlayGrid.forAllCells = function (f) {
  var overlayGridCellSize = sim.model.space.overlayGridCellSize;
  var xMax = parseInt(sim.model.space.xMax / overlayGridCellSize),
    yMax = parseInt(sim.model.space.yMax / overlayGridCellSize);
  var i=0, j=0;
  for (i=0; i < xMax; i++) {
    for (j=0; j < yMax; j++) {
      // call the method with coordinates and cell as parameters
      f(i+1,j+1,sim.space.grid[i][j]);
    }
  }
};

/**
 * @param x
 *   the x coordinate of the cell
 * @param y
 *   the y coordinate of the cell
 * Get the value/content of af grid cell, in the case of overlay cells
 */
oes.space.overlayGrid.getCell = function (x,y) {
  var gridCellSize = sim.space.overlayGrid.cellSize || 1;
  var yMax = parseInt(sim.model.space.yMax / gridCellSize);
  x = parseInt(x/gridCellSize);
  y = parseInt(y/gridCellSize);
  return sim.space.grid[x][yMax - y - 1];
};
/*******************************************************************************
 * The ObjectInGridSpace class for grid space simulations
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
oes.ObjectInGridSpace = new cLASS({
  Name: "ObjectInGridSpace",
  supertypeName: "oBJECT",
  properties: {
    "pos": {range: Array, initialValue: [0,0], label:"Position"}
  },
  methods: {
    "moveToCell": function (x,y) {
      var xMax = sim.model.space.xMax,
          yMax = sim.model.space.yMax;
      var oldX = this.pos[0], oldY = this.pos[1];
      if (sim.model.space.geometry === "EUCLIDEAN") {
        if (x < 1) x = 1;
        else if (x > xMax) x = xMax;
        if (y < 1) y = 1;
        else if (y > yMax) y = yMax;
      } else {  // TORROIDAL geometry
        if (x < 1) x = xMax + x;
        else if (x > xMax) x = x % xMax;
        if (y < 1) y = yMax + y;
        else if (y > yMax) y = y % yMax;
      }
      // remove o from its old position in the grid
      delete sim.space.grid[oldX][oldY].objects[String(this.id)];
      // update position of o
      this.pos[0] = x; this.pos[1] = y;
      // assign object to grid cell
      sim.space.grid[x][y].objects[String(this.id)] = this;
    },
    "moveToCellIfFree": function (x,y) {
      if (Object.keys( sim.space.grid[x][y].objects).length === 0) {
        this.moveToCell(x,y);
        return true;
      } else return false;
    },
    "moveInDirection": function (dir) {
      var newPos = oes.space.grid.getTranslationPosition( this.pos[0], this.pos[1], dir);
      this.moveToCell( newPos[0], newPos[1]);
    },
    "moveInRandomDirection": function () {
      var dir = oes.space.grid.directions[rand.uniformInt(0,7)];
      this.moveInDirection( dir);
    }
  }
});
var ObjectInOneDimSpace = new cLASS({
  Name:"ObjectInOneDimSpace",
  supertypeName: "oBJECT",
  properties: {
    "pos": {range: cLASS.Array("Decimal", 2)},
    "vel": {range: cLASS.Array("Decimal", 2)},
    "acc": {range: cLASS.Array("Decimal", 2)}
  },
  methods: {
    "computeNextVelocity": function () {
      return this.vel[0] + this.acc[0] * sim.timeIncrement;
    },
    "computeNextPosition": function () {
      return this.pos[0] + this.vel[0] * sim.timeIncrement;
    }
  }
});

/*******************************************************************************
 * The Object class for 2D space simulations.
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @license The MIT License (MIT)
 * @author Mircea Diaconescu
 ******************************************************************************/
oes.ObjectInTwoDimSpace = new cLASS({
  Name: "ObjectInTwoDimSpace",
  supertypeName: "oBJECT",
  properties: {
    "pos": {range: Array, initialValue: [0,0], label:"Position"},
    "width": {range: "Decimal", initialValue: 0, label:"Width"},
    "height": {range: "Decimal", initialValue: 0, label:"Height"},
  },
  methods: {}
});