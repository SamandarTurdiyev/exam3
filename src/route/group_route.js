import { Router } from "express"; 
import { Group_Post } from "../controller/group_controller.js";

export const GroupRoute = Router()

GroupRoute.post('/addgroup' , Group_Post)