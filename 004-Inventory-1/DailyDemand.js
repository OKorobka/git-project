/*******************************************************************************
 * The DailyDemand event class
 *
 * @copyright Copyright 2015-2016 Gerd Wagner
 *   Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
var DailyDemand = new cLASS({
  Name: "DailyDemand",
  shortLabel: "Dem",
  supertypeName: "eVENT",
  properties: {
    "quantity": {range: "PositiveInteger", label:"Quantity", shortLabel: "quant"},
    "shop": {range: "SingleProductShop"}
  },
  methods: {
    "onEvent": function () {
      var sh = this.shop,
          sQ = sh.stockQuantity,
		  sH = sh.holdingCosts,
		  oC = sh.orderingCosts,
		  sOC = sh.stockOut,
		  tQ = sh.totalsalequantity,
          newSQ = sQ - this.quantity,
          rP = sh.reorderPoint;
      // update stockQuantity
      this.shop.stockQuantity = Math.max( 0, newSQ);
      // update lostSales if demand quantity greater than stock level
      if (newSQ < 0) {
        sim.stat.lostSales += Math.abs( newSQ);
		 newSQ = 0;
      }
	  if (sQ > 0) {
		   tQ +=sQ - this.quantity,
       sim.stat.servicelevel = (tQ/(tQ+sim.stat.lostSales))*100;
		 }
	 if (sQ > 0) {
	 	 sim.stat.totalcost +=sQ*sH+rP*oC+sim.stat.lostSales*sOC;
	 }
	 
      // schedule new Delivery if stock level falls below reorder level
      if (sQ > rP && newSQ <= rP) {
        return [new Delivery({
          occTime: this.occTime + Delivery.leadTime(),
          quantity: sh.targetInventory - newSQ,
          receiver: sh
        })];
      } else return [];  // no follow-up events
	 
    },
    "createNextEvent": function () {
      return new DailyDemand({
        occTime: this.occTime + DailyDemand.recurrence(),
        quantity: DailyDemand.sampleQuantity(),
        shop: this.shop
      });
    }
  }
});
DailyDemand.recurrence = function () {
  return 1;
};
DailyDemand.sampleQuantity = function () {
  return rand.uniformInt( 5, 30);
};
