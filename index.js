require('dotenv').config()
const express=require("express");
const app=express();
const mongoose=require("mongoose");

const PORT=process.env.PORT||3000;
const uri=process.env.MONGO_URL;
const bodyParser=require("body-parser");
const cors=require("cors");

const {Holding}=require("./models/HoldingsModel");
const {Position}=require("./models/PositionsModel");
const {Order}=require("./models/OrdersModel");

app.use(cors());
app.use(bodyParser.json());

//connected to mongoDB successfully
mongoose.connect(uri).then(()=>{
    console.log("Succefully connected to DB");
}).catch((err)=>{
    console.log(err);
});

//add Holding dummy data into MongoDB Atlas
// app.get("/addHoldings",async(req,res)=>{
//       let tempHolding=[
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ];
//      tempHolding.forEach((element)=>{
//         let newHolding=new Holding(
//             {
//                 name: element.name,
//                 qty: element.qty,
//                 avg: element.avg,
//                 price:element.price,
//                 net: element.net,
//                 day: element.day,
//             }
//         );
//         newHolding.save();
//     });
//     res.send("Done!");
// });

// app.get("/addPosition",async(req,res)=>{
//     let tempPosition= [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
//     tempPosition.forEach((item)=>{
//       let newPosition=new Position({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//       });
//       newPosition.save();
//     });
//     res.send("Done!!");
// });

// app.get("/addOrder",async(req,res)=>{
//     let tempOrder=[
//         {
//           name: "INFY",
//           qty:2,
//           price: 1555.45,
//           percent: "-1.60%",
//           mode: "BUY",
//         },
//         {
//           name: "ONGC",
//           qty:5,
//           price: 116.8,
//           percent: "-0.09%",
//           mode: "BUY",
//         },
//         {
//           name: "TCS",
//           qty:3,
//           price: 3194.8,
//           percent: "-0.25%",
//           mode: "BUY",
//         },
//         {
//           name: "KPITTECH",
//           qty:1,
//           price: 266.45,
//           percent: "3.54%",
//           mode: "SELL",
//         },
//         {
//           name: "QUICKHEAL",
//           qty:6,
//           price: 308.55,
//           percent: "-0.15%",
//           mode: "BUY",
//         },
//         {
//           name: "WIPRO",
//           qty:7,
//           price: 577.75,
//           percent: "0.32%",
//           mode: "SELL",
//         },
//         {
//           name: "M&M",
//           qty:3,
//           price: 779.8,
//           percent: "-0.01%",
//           mode: "BUY",
//         },
//         {
//           name: "RELIANCE",
//           qty:2,
//           price: 2112.4,
//           percent: "1.44%",
//           mode: "SELL",
//         },
//         {
//           name: "HUL",
//           qty:3,
//           price: 512.4,
//           percent: "1.04%",
//           mode: "BUY",
//         },
//       ];
//       tempOrder.forEach((items)=>{
//         let newOrder=new Order({
//             name: items.name,
//             qty:items.qty,
//             price: items.price,
//             percent: items.percent,
//             mode: items.mode,
//         });
//         newOrder.save();
//       });
//       res.send("Done!!");
// });

app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await Holding.find({});
    res.json(allHoldings);
});

//Getting all position data 
app.get("/allPositions",async(req,res)=>{
    let allPositions=await Position.find({});
    res.json(allPositions);
});

//Getting all Order data 
app.get("/allOrders",async(req,res)=>{
    let allOrders=await Order.find({});
    res.json(allOrders);
});


app.get("/allPositions",async(req,res)=>{
    let allPositions=await Position.find({});
    res.json(allPositions);
});

app.get("/allOrders",async(req,res)=>{
    let allOrders=await Order.find({});
    res.json(allOrders);
});

//Post Route for handling new placed order
app.post("/newOrder", async (req, res) => {
    let newOrder = new Order({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
  
    newOrder.save();
  
    res.send("Order saved!");
  });


app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`);
});