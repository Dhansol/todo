// Server code will come here

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const CORS = require("cors");
const parser = require("body-parser")
require("dotenv").config()

const app = express();

const _bodyparser = parser.json();

app.use(CORS());
app.use(_bodyparser)
app.use("/",router);



mongoose.connect(process.env.DATA_BASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },()=>{console.log("Data base is running"+process.env.DATA_BASE_URL)}
);

mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log("lets get started")})