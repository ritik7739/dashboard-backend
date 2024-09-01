const {Schema}=require("mongoose");

const OrdersSchemas=new Schema({
    name: String,
    qty:Number,
    price: Number,
    percent: String,
    mode: String,
});

module.exports={OrdersSchemas};