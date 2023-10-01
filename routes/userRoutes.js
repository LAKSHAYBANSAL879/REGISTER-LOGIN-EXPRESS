const express= require("express");
const {registerUser,getUser,userLogin}=require("../controller/usercontroller.js")
const userRoute=express.Router();
userRoute.post("/registerUser",registerUser)
userRoute.post("/userLogin",userLogin)
userRoute.get("/getUser",getUser)

module.exports={userRoute}
