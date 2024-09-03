const registerModel = require('../models/register');

exports.getSignUp=async(req,res,next)=>{
    const registers= await registerModel.find({});
    res.json({
        success:true,
        message:'Successfully SignUp',
        registers
    })
}