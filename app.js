const express = require("express");
require("dotenv").config()
const cors = require("cors");

const connectDb=require('./config/db.js')
const  {userRoute} = require("./routes/userRoutes.js");
const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  // user route

connectDb();
module.exports = app;
