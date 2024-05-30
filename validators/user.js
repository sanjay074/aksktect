const Joi = require("joi");
const addUserSchema =Joi.object({
    name: Joi.string().required(),
    message:Joi.string().required(),
    email: Joi.string().required(),
  })


module.exports={
   addUserSchema
    }