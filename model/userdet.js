const mongoose=require('mongoose')
const { use } = require('../app')
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Name is req'],
        maxLength:[15,'Only max 15 chars are allowed']
    },
    email:{
        type:String,
        required:[true,'Email is req']
    },
    age:Number,
    gender:String,
password:{
    type:String,
    required:[true,'Password is req']
}
})
module.exports=mongoose.model("User",userSchema)