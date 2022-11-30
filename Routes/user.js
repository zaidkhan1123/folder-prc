const Model = require("../Models/usermodel");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});



router.post("/post", async (req, res) => {
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


router.get("getall", async(req,res)=>{
try{
 const data = await  Model.find();
 res.json(data)
}catch (error){
  res.status(400).json({message: error.message})
}
})


module.exports = router;
