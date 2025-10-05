import express from "express";
import dotenv from 'dotenv'
import { adminRegister } from "../../controllers/admin/adminRegister.js";
import { adminLogin } from "../../controllers/admin/adminLogin.js";
import { getAdmin } from "../../controllers/admin/getAdmin.js";


const router = express.Router();
dotenv.config()
router.post("/register", adminRegister);
router.post("/login", adminLogin);
router.get("/getAdmin/:_id",getAdmin)

export default router;
