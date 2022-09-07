const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema({
  heading:{type:String},
  data:{type:String},
},{timestamps:true})


 const todo = mongoose.model("list",todoSchema,"list");

 module.exports = todo;