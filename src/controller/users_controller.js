import Jwt  from "jsonwebtoken";
import path from "path";
import fs from "fs"
import  {User}  from "../models/index.js";
import { Group } from "../models/index.js";

export const GET_USERS = async (req ,res ) => {
    try {
      const users =   await User.findAll()
      res.status(200).json({status: 200 , data: users  })
    } catch (error) {
        console.log(error.message);
    }
}
export const GET_USERSID = async (req ,res ) => {
    try {
        let {token} = req.headers;
        let {username} = Jwt.verify(token,process.env.SECRETKEY)
        const user= await User.findOne({where : { username}, include:Group}).then(async (result) =>{
            if(!result){
                throw new Error("not found user")
            }
            return res.status(200).json({message:"user info",data:result})
        })
        console.log(user);
        if (!user) {
          return  res.send('ok')
        }
        res.status(200).json({status: 200 , data: user})
        } catch (error) {
        console.log(error.message);
    }
}

export const ADD_USERS = async (req ,res ) => {
    try {
        const {username  , firstName , secondName , description}  = req.body
        const {filename} = req.file


        const addusers = await User.create({
             img : filename,
             username  ,
             firstName ,
             secondName ,
             description
        })
        res.status(200).json({
            status: 200,
            message: 'added',
            data: addusers
        }) 
    } catch (error) {
        console.log(error.message);
    }
}

export const UPDATE_USERS = async (req ,res ) => {
    try {
        let {img}=await User.findOne({where:{id : req.params.id}})
        img = img.split("/")[2]
        fs.unlinkSync(path.join(process.cwd(), 'uploads' , img))
        const {username  , firstName , secondName , description}  = req.body
        const {filename} = req.file

        const user= await User.update({
            img : filename,
            username  , 
            firstName , 
            secondName , 
            description
        },
            {where : { id: req.params.id}})
        res.status(200).json({status: 200 , data: user})
        } catch (error) {
        console.log(error.message);
    }
}

export const DELETE_USERSID = async (req ,res ) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            },
            returning: true
        }) 
    
        res.json({
            status: 200,
            message: 'todo is deleted!',
        })
        } catch (error) {
        console.log(error.message);
    }
}