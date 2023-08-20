import "dotenv/config"
const port  = process.env.PORT
import express from "express"

import { user_router } from "./route/users_route.js"
import { auth_router } from "./route/auth_route.js"
import { auth_checktoken } from "./middleware/auth_check.js"
import { GroupRoute } from "./route/group_route.js"

const app = express()

app.use(express.json())
app.use(auth_router)
app.use(auth_checktoken)
app.use(user_router)
app.use(GroupRoute)
app.use("/*" , (req, res) => {
    return res.status(404).json({
        status: 404 ,
        message :   req.baseUrl +  " is not Found"
    })
})
app.listen(port, () => console.log(`server is running ${port}`))
