const moongose = require("mongoose");


const todoschema  = new moongose.Schema({
    item:{
        type:String,
        required:true
    }
})


module.exports = moongose.model("todolist",todoschema)