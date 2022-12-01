
const mongoose = require('mongoose');


  const dataschema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    age:{
        required:false,
        type:String
    }
  })

  module.exports =  mongoose.model("Data",dataschema)