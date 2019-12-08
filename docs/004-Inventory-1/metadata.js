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
sim.model.name = "Inventory-1";
sim.model.title = "Inventory Management with a Continuous Review Policy";
sim.model.systemNarrative = "<p>A shop is selling one product type only (e.g., one model of TVs), " +
    "such that its in-house inventory only consists of items of that type. On each business day, " +
    "customers come to the shop and place their orders. If the ordered product quantity is in stock, " +
    "the customer pays for the order and the ordered items are provided. Otherwise, the shop has missed " +
    "a business opportunity and the difference between order quantity and the inventory level counts as a " +
    "lost sale. The order may still be partially fulfilled, if there are still some items in stock, else " +
    "the customer has to leave the shop without any item. The percentage of lost sales is an important " +
    "performance indicator.</p>" +
    "<p>Whenever the stock level falls below a certain threshold (called <i>reorder point</i>), " +
    "the shop places a replenishment order with a quantity computed as the difference between an upper " +
    "threshold (called <i>target inventory</i>) and the current stock level.</p>";
sim.model.shortDescription = "<p>The model defines an inventory management system for a " +
    "single product shop with a <em>continuous review</em> replenishment policy. " +
    "For simplicity, customer orders are treated in an abstract way by aggregating all customer " +
    "orders during a business day into a daily demand event, such that the random variation of the "+
    "daily order quantity is modeled by a random variable.</p>" +
    "<p>Likewise, the random variation of the <em>delivery lead time</em>, which is the time in-between a " +
    "replenishment order and the corresponding delivery, is modeled by a random variable.</p>";
sim.model.license = "CC BY-NC";
sim.model.creator = "Gerd Wagner";
sim.model.created = "2016-06-01";
sim.model.modified = "2016-11-14";

