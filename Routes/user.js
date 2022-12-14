const Model = require("../Models/usermodel");
const express = require("express");

var cors = require('cors');
app.use(cors());

res.header( "Access-Control-Allow-Origin" );

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});



router.post("/post", async (req,res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age
  })
  try {
    const dataTosave = await data.save();
    res.status(200).json(dataTosave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get("/getall",async(req,res)=>{
try{
 const data = await  Model.find();
 res.json(data)
}catch (error){
  res.status(400).json({message: error.message})
}
});

// router.delete("/getall:id", async(req,res)=>{
// try{
//   const deletitem = await Model.findByIdAndUpdate(req.params.id);
//   res.status(200).json("item deleted successfully")
// }catch(err){
//  res.json(err);
// }
// })



module.exports = router;
