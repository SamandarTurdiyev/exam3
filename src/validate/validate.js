import Joi from "joi"

export const userjoi = Joi.object({
    username : Joi.string().required().min(3).max(50) ,
    firstName : Joi.string().min(2).max(50),
    secondName : Joi.string().min(2).max(50),
    description : Joi.string().min(5).max(255)
});

