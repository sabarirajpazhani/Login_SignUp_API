const registerModel = require('../models/register');

exports.getSignUp=async(req,res,next)=>{
    // const registers= await registerModel.find({});
    try{
        const {username, email, password} = req.body;
        let user = await registerModel.findOne({email});
        if(user){
            return res.status(409).json({
                message: "User already Exists"
            })
        }
        user = new registerModel({username,email,password});
        await user.save();

        res.status(201).json({
            message:"User Registered Successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        });
    }
}