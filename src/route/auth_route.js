import { Router } from "express"; 
import { register } from "../auth/register.js";
import { Login } from "../auth/login.js";
import { upload } from "../multer/multer.js";

export const auth_router = Router()

auth_router.post("/register",upload.single("img") , register)
auth_router.post("/login",upload.single("img") , Login)