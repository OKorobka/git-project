var CustomerDeparture = new cLASS({
  Name: "CustomerDeparture",
  label: "Customer departures",
  shortLabel: "Dep",  // for the log
  supertypeName: "eVENT",
  properties: {
    "serviceDesk": {range: "ServiceDesk", label:"Service desk"},
    "serviceTime": {range: "NonNegativeInteger"}
  },
  methods: {
    "onEvent": function () {
      var changes = [], events = [], srvTm=0;
      // remove customer from queue
      this.serviceDesk.queueLength--;
      // if there are still customers waiting
      if (this.serviceDesk.queueLength > 0) {
        // start next service and schedule its end/departure
        //changes.push({object: this.serviceDesk, property: "queueLength", decrement: 1});
        srvTm = ServiceDesk.serviceDuration();
        events.push( new CustomerDeparture({
          occTime: this.occTime + srvTm,
          serviceTime: srvTm,
          serviceDesk: this.serviceDesk
        }));
      }
      // update statistics
      sim.stat.departedCustomers++;
      sim.stat.totalServiceTime += this.serviceTime;

      return events;  // return [events, changes]
    }
  }
});
