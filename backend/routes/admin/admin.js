import express from "express";
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { adminRegister } from "../../controllers/admin/adminRegister.js";
import { adminLogin } from "../../controllers/admin/adminLogin.js";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const router = express.Router();
router.use(cookieParser())
router.use(express.json());
router.use(session({
    secret : process.env.SECRET_KEY,
    resave : false,
    saveUninitialized  :false,
    cookie : {
        httpOnly : true,
        secure : false,
        maxAge : 1000*60*60*24*30
    }
}))
router.post("/register", adminRegister);
router.post("/login", adminLogin);
export default router;
