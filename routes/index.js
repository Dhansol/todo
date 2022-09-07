const express = require("express");

const Model = require("../model/schema")
const router = express.Router();


router.get("/",(req,res)=>{
  console.log("in this router");

  res.send("Clicked to this section")
})

router.post("/post",async (req,res)=>{
  const {heading,content} = req.body;

  const todoData = new Model({
    heading : heading,
    data :content
  })
  
  const data = await Model.find({});
  console.log(data)

  todoData.save().then().catch(err=>console.log(err));

  res.send(data)

})

module.exports = router;