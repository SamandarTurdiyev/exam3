import { Connection } from "../models/index.js";
import { User } from "../models/index.js";
import { Group } from "../models/index.js";
import  Jwt  from "jsonwebtoken";

export const Group_Post = async (req, res) => {
    try {

        const Groups = await Group.findAll({where : {group_link :req.body.group_link}})
        if (Groups.length) {
            return res.send({message : "invalid  link"})
        }
        const { group_link , group_name} = req.body
        const {filename} = req.file
        const {token} = req.params
        const {username} = Jwt.verify(token , process.env.SECRETKEY)
        await User.findOne({where:{username}}).then(async (result) => {
            let groupdata = await Group.create({
                img : filename,
                 group_name,
                 group_link 
            })
            Connection.create({user_id: result.id, group_id:result.id })
          return res.status(201).json({message:"group added",groupdata})

        })
    } catch (error) {
        console.log(error);
        
    }
}

