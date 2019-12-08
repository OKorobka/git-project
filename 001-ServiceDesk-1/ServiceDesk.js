var ServiceDesk = new cLASS({
  Name: "ServiceDesk",
  supertypeName: "oBJECT",
  properties: {
    "queueLength": { range: "NonNegativeInteger",
        label: "Queue length", shortLabel: "qLen"}
  }
});
ServiceDesk.serviceDuration = function () {
  return rand.frequency({"2":0.3, "3":0.5, "4":0.2});
};