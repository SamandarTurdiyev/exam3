import "dotenv/config"
import  Jwt  from "jsonwebtoken";

import { User } from "../models/users.js";

export const register = async (req, res) => {
    try {
        const {username  , firstName , secondName , description}  = req.body
        const {filename} = req.file
        const check_user = await User.findAll({
            where: {
                username : req.body.username
            }
        })
        if (check_user.length > 0) {
            return res.status(500).json({
                status: 500,
                message: "users band"
            })
        }
        const token  = Jwt.sign({username} , process.env.SECRETKEY)
       
        const data = await User.create({
            img : filename,
            username  ,
             firstName ,
              secondName ,
               description
        })

        return res.status(201).json({
            status: 201 ,
            message : " create user",
            data,
            token
        })
    } catch (error) {
        console.log(error);
    }
}