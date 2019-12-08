 /*******************************************************************************
 * The CustomerArrival event class
 *
 * @copyright Copyright 2015-2016 Gerd Wagner
 *   Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
var CustomerArrival = new cLASS({
  Name: "CustomerArrival",
  label: "Customer arrivals",
  shortLabel: "Arr",  // for the log
  supertypeName: "eVENT",
  properties: {
    "serviceDesk": {range: "ServiceDesk", label:"Service desk"}
  },
  methods: {
    "onEvent": function () {
      var srvTm=0, changes = [], events = [];
      //changes.push({object: this.serviceDesk, property: "queueLength", increment: 1});
      this.serviceDesk.queueLength++;
      sim.stat.arrivedCustomers++;
      // if the service desk is not busy
      if (this.serviceDesk.queueLength === 1) {
        //changes.push({object: this.serviceDesk, property: "isBusy", value: true});
        srvTm = ServiceDesk.serviceDuration();
        events.push( new CustomerDeparture({
          occTime: this.occTime + srvTm,
          serviceTime: srvTm,
          serviceDesk: this.serviceDesk
        }));
      }
      //return [events, changes];
      return events;
    }
  }
});
// Any exogenous event type needs to define a static function "recurrence"
CustomerArrival.recurrence = function () {
  return rand.uniformInt( 1, 6);
};