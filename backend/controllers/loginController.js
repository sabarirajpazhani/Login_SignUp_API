const registerModel = require('../models/register');

exports.getLogin=async(req,res,next)=>{

    try{
        const {email,password}=req.body;
        const user = await registerModel.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User Not Exists. So Please SignUp"
            })
        }
        if(password != user.password){
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        return res.status(200).json({
            success: true,
            message:"Login Successful!!"

        })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        });
    }
}