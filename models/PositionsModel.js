const {model}=require("mongoose");

const {PositionsSchemas}=require("../Schemas/PositionsSchemas");

const Position=new model("Position",PositionsSchemas);

module.exports={Position};