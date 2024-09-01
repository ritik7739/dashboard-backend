const {model}=require("mongoose");

const {OrdersSchemas}=require("../Schemas/OrdersSchemas");

const Order=new model("Order",OrdersSchemas);

module.exports={Order};