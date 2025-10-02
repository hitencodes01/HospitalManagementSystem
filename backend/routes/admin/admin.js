import express from 'express'
import { adminRegister } from '../../controllers/admin/adminRegister.js'
import { adminLogin } from '../../controllers/admin/adminLogin.js'

const router = express.Router()
router.use(express.json())

router.post("/register",adminRegister)
router.post("/login",adminLogin)

export default router