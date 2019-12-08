var SingleProductShop = new cLASS({
  Name: "SingleProductShop",
  supertypeName: "oBJECT",
  properties: {
    "stockQuantity": {range:"NonNegativeInteger", label:"Stock", shortLabel: "stock"},
    "reorderPoint": {range:"NonNegativeInteger"},
	"totalsalequantity": {range:"NonNegativeInteger"},
    "targetInventory": {range:"PositiveInteger"},
	"holdingCosts": {range:"NonNegativeFloat", },
    "orderingCosts": {range:"NonNegativeInteger"},
    "stockOut": {range:"PositiveInteger"}
	
	
  }
});
