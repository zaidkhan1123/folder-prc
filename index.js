
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Port  = process.env.Port || 3000
app.use(express.json());
app.use(express.urlencoded((extended=true)));
////////////////////////////////////// Routes ///////////////////////////////////////////////////
const router = require("./Routes/user.js")

app.use("/api",router)

////////////////////////////////////// Routes ///////////////////////////////////////////////////



mongoose.connect("mongodb+srv://zaidkhan:khankhan@cluster0.qnhryjo.mongodb.net/newcollection");

db = mongoose.connection;
 db.on("error",(error)=>{
console.log(error);
 })
db.once("connected",()=>{
    console.log("Database Connected");
})











app.listen(Port,()=>{
    console.log("server is running");
})