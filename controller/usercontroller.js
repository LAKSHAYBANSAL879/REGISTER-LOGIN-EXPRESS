const User=require("../model/userdet.js")
exports.registerUser=async(req,res)=>{
    try{
const {name,email,age,gender,password}=req.body;
if(!name || !email || !age ||!gender || !password){
    throw new Error("All fields are required to register")
}
const user=await User.create({
    name,
    email,
    age,
    gender,
    password
})
res.status(201).json({
    success:true,
    message:"User Registred Sucessfully",
  user
})
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}
exports.userLogin = async(req,res)=>{
    const {email,password} = req.body;
if(!email || !password){
    throw new Error("user email and password is required to login")
}
    try {
        const userData= await User.findOne({email});
        if(userData){
            
            if(userData.password == password){
                res.status(200).json(
                    {
                        success:true,
                        message:"User Login Successfully"})
            }else{
                res.status(401).json({
                    success:false,
                    message:"You have Entered Wrong Password"})
            }
        }else{
            res.status(404).json(
                {
                    success:false,
                    message:"No Account Find associated to this email"
                })
        }
        
    } catch (error) {
        res.status(501).json(
            {
                success:false,
                message:error.message})   
    }
}
exports.getUser = async (req, res) => {
    try {
        const users = await User.find({})
        
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}