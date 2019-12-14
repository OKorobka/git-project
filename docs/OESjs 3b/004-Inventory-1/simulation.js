/*******************************************************
 Simulation Parameters
********************************************************/
sim.scenario.simulationEndTime = 100;
//sim.scenario.randomSeed = 5;  // optional
sim.config.createLog = true;
sim.config.runInMainThread = true;  // for debugging


/*******************************************************
 Simulation Model
********************************************************/
sim.model.time = "discrete"; // implies using only discrete random variables
sim.model.timeUnit = "D";  // days

sim.model.objectTypes = ["SingleProductShop"];
sim.model.eventTypes = ["DailyDemand", "Delivery"];

/* Global variables*/
sim.model.v.replenishmentPolicy = {
	range: "Integer",
   initialValue: [1, 2],
    label: "Replenishment Policy"
	  };

/*******************************************************
 Define an experiment
 ********************************************************/
sim.experiment.id = 1;
sim.experiment.experimentNo = 1;  // sequence number relative to simulation scenario
sim.experiment.title = "EValuate the continuous replenishment scenario";
sim.experiment.replications = 50;

 


/*******************************************************
 Define the initial state
 ********************************************************/
// Either declaratively:
sim.scenario.initialState.objects = {
  "1": {typeName: "SingleProductShop", name:"TV Shop", shortLabel:"shop",
  stockQuantity: 80, reorderPoint: 50, targetInventory: 100, totalsalequantity:0, holdingCosts: 0.1, orderingCosts: 10, stockOut: 2, reorderInterval:3 }
   
};

sim.scenario.initialState.events = [
  {typeName: "DailyDemand", occTime:1, quantity:25, shop:"1"}
  
];
// Or with a procedure:
/*
sim.scenario.setupInitialState = function () {
  var tvShop = new SingleProductShop({
    id: 1, name:"TV",
    stockQuantity: 80,
    reorderPoint: 50,
    targetInventory: 100
  });
  sim.addObject( tvShop);
  sim.scheduleEvent( new DailyDemand({occTime:1, quantity:25, shop: tvShop}));
}
*/
/*******************************************************
 Define Output Statistics Variables
 ********************************************************/
sim.model.statistics = {
  "lostSales": {range:"NonNegativeInteger", label:"Lost"},
  "averageInventory": {objectType:"SingleProductShop", objectIdRef: 1,
    property:"stockQuantity", aggregationFunction:"avg", label:"Avg. inventory"},
	"servicelevel": {range:"Decimal", label:"Service Level"},
	"totalholdingcost":{range:"Decimal", objectIdRef: 1, label:"total holding cost per day",
    computeOnlyAtEnd: true, 
    expression: function () {
      return sim.stat.averageInventory*0.1
		 }
 },
     "totalcost":{range:"Decimal", label:"totalcost"}
	
};







