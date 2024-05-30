const User = require("../models/user");
const {addUserSchema} = require("../../validators/user")

exports.userSendMessage = async (req,res)=>{
    try{
     const {error} = addUserSchema.validate(req.body);
     if(error){
        return res.status(400).json(error.details[0].message);
     }
     const {email,name,message} = req.body;
     const addCoures = new User({
        email,name,message
     })

     const saveData = await addCoures.save();
      return res.status(201).json({status:1, message:"User message send  sucessfully"});
    }catch(error){
        return res.status(500).json({
            status:0,
            message:error.message.toString(),
        })
    }
}