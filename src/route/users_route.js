import { Router } from "express";
import { upload } from "../multer/multer.js";
import {  ADD_USERS, DELETE_USERSID, GET_USERS, GET_USERSID, UPDATE_USERS } from "../controller/users_controller.js";

export const user_router = Router()

user_router.get('/users' , GET_USERS)
user_router.get('/users/:id' , GET_USERSID)
user_router.post('/users' , upload.single("img"),ADD_USERS)
user_router.put('/users/:id' , upload.single("img"),UPDATE_USERS)
user_router.delete('/users/:id' , upload.single("img"),DELETE_USERSID)
