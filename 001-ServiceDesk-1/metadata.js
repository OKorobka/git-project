var sim = sim || {};
sim.model = sim.model || {};
sim.scenario = sim.scenario || {};
sim.config = sim.config || {};

var oes = oes || {};
oes.ui = oes.ui || {};
oes.ui.explanation = {};

/*******************************************************
 Simulation Model
********************************************************/
sim.model.name = "ServiceDesk-1";
sim.model.title = "A Service Queue Model with Utilization and Maximum Queue Length Statistics";
sim.model.systemNarrative = "The customers arriving at a service desk have to wait in a queue " +
    "when the service desk is busy. Otherwise, when the queue is empty and the service desk is not busy, " +
    "they are immediately served by the service clerk. Whenever a service is completed, the served " +
    "customer departs and the next customer from the queue, if there is any, will be served.";
sim.model.shortDescription = "A service queue model (one service and one queue) with two statistics: " +
    "maximum queue length and service utilization. For simplicity, the model uses abstract (discrete) "+
    "time and abstracts away from individual customers and from the composition of the queue, " +
    "which is only represented in terms of its length. The model includes one object type: " +
    "<i>ServiceDesk</i>, and two event types: <i>PartArrival</i> and <i>PartDeparture</i>. Both the random "+
    "time variable for the recurrence of customer arrival events and the random time variable for "+
    "modeling the duration of services are discrete.";
sim.model.license = "CC BY-NC";
sim.model.creator = "Gerd Wagner";
sim.model.created = "2016-06-01";
sim.model.modified = "2018-12-04";
