const {model}=require("mongoose");

const {HoldingsSchemas}=require("../Schemas/HoldingsSchemas");

const Holding=new model("Holding",HoldingsSchemas);

module.exports={Holding};