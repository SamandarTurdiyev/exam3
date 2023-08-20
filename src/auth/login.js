import  "dotenv/config"
import Jwt  from "jsonwebtoken";
import { User } from "../models/users.js";

export const Login  = async (req, res ) => {
    try {
        const {username} =  req.body
        const user = await User.findAll({
            where: {
                username
            }
        })
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user is not found"
            })
        }
        const token  = Jwt.sign({username} , process.env.SECRETKEY)
return res.status(200).json({
    status: 200,
    message : "ok",
    user 
})
    } catch (error) {
        console.log(error);
    }
}