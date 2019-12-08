var Delivery = new cLASS({
  Name: "Delivery",
  shortLabel: "Del",
  supertypeName: "eVENT",
  properties: {
    "quantity": {range: "PositiveInteger", label:"Quantity", shortLabel: "quant"},
    "receiver": {range: "SingleProductShop"}
  },
  methods: {
    "onEvent": function () {
	
      // increment stock by delivery quantity
      this.receiver.stockQuantity += this.quantity;
	 
      return [];  // no follow-up events
	
    }
	
  }
});
Delivery.leadTime = function () {
  var r = rand.uniformInt( 0, 99);
  if (r < 25) return 1;         // probability 0.25
  else if (r < 85) return 2;    // probability 0.60
  else return 3;                // probability 0.15
};

