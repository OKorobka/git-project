/*******************************************************
 Simulation Scenario Parameters
********************************************************/
sim.scenario.simulationEndTime = 200;
sim.scenario.randomSeed = 12345;  // optional
sim.config.visualize = true;
sim.config.createLog = true;
sim.config.runInMainThread = true;  // for debugging
/*******************************************************
 Simulation Model
********************************************************/
sim.model.time = "discrete";  // implies using only discrete random variables
sim.model.objectTypes = ["ServiceDesk"];
sim.model.eventTypes = ["CustomerArrival", "CustomerDeparture"];

sim.model.constraints = {
  "nonEmptyQueue-implies-DepartureEvt": function () {
    var departureEvtExists = sim.FEL.containsEventOfType("CustomerDeparture");
    if (sim.namedObjects["serviceDesk1"].queueLength > 0) return departureEvtExists;  // there must be a departure
    else return !departureEvtExists;  // there must not be a departure
  }
};

/*******************************************************
 Define Initial State
********************************************************/
// Either declaratively:
sim.scenario.initialState.objects = {
  "1": {typeName: "ServiceDesk", name:"serviceDesk1", shortLabel: "sd1", queueLength: 1}
};
sim.scenario.initialState.events = [
  {typeName: "CustomerDeparture", occTime:2, serviceDesk: 1},
  {typeName: "CustomerArrival", occTime:1, serviceDesk: 1}
];
// Or with a procedure:
/*
sim.scenario.setupInitialState = function () {
  var sD = new ServiceDesk({id: 1, queueLength: 0, isBusy: false});
  sim.addObject( sD);
  sim.scheduleEvent( new CustomerArrival({occTime:1, serviceDesk: sD}));
}
*/
/*******************************************************
 Define Output Statistics Variables
 ********************************************************/
sim.model.statistics = {
  "arrivedCustomers": {range:"NonNegativeInteger", label:"Arrived customers"},
  "departedCustomers": {range:"NonNegativeInteger", label:"Departed customers"},
  "totalServiceTime": {range:"NonNegativeInteger"},
  "serviceUtilization": {range:"Decimal", label:"Service utilization",
      computeOnlyAtEnd: true, decimalPlaces: 1, unit: "%",
      expression: function () {
        return sim.stat.totalServiceTime / sim.time * 100
      }
  },
  "maxQueueLength": {objectType:"ServiceDesk", objectIdRef: 1,
      property:"queueLength", aggregationFunction:"max", label:"Max. queue length"},
  "averageQueueLength": {objectType:"ServiceDesk", objectIdRef: 1,
    property:"queueLength", aggregationFunction:"avg", label:"Avg. queue length"},
  "queueLength": {objectType:"ServiceDesk", objectIdRef: 1,
    property:"queueLength", showTimeSeries: true, label:"Queue length"}
};
/*******************************************************
 Define an observation UI
 ********************************************************/

sim.config.observationUI.type = "SVG";
sim.config.observationUI.canvas.width = 600;
sim.config.observationUI.canvas.height = 300;
sim.config.observationUI.fixedElements = {
  "desk": {
    shapeName: "rect",
    shapeAttributes: { x: 350, y: 200, width: 50, height: 30},
    style: "fill:brown; stroke-width:0"
  }
};
sim.config.observationUI.objectViews = {
  "serviceDesk1": [  // a view of the queue
    { shapeName: "rect",  // a rectangle defined by
      shapeAttributes: {  // left-upper corner (x,y) as well as width and height
        x: function (sd) {console.log(sd.queueLength); return Math.max( 0, 330 - sd.queueLength * 20);},
        width: function (sd) {return Math.min( 300, sd.queueLength * 20);},
        y: 150, height: 80
      },
      style:"fill:yellow; stroke-width:0"
    },
    { shapeName: "text",
      shapeAttributes: {x: 325, y: 250,
          textContent: function (sd) {return sd.queueLength;}},
      style:"font-size:14px; text-anchor:middle"
    }
  ]
};
