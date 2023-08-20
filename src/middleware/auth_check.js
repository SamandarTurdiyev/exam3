import "dotenv/config"
import Jwt  from "jsonwebtoken";
export function auth_checktoken(req,res,next) {
   try {
    let {token} = req.headers
    if (token) {
        Jwt.verify(token,process.env.SECRETKEY,(err, user) => {
            if (err) {
                return res.status(403).json({message:"please register  or sign"});
            }
            req.user = user;
            return next();
            })
    }
   } catch (error) {
    console.log(error);
   }
}