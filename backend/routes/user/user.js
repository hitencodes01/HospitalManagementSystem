import express from 'express'
import {registerUser} from '../../controllers/user/userRegister.js'
import {userLogin} from '../../controllers/user/userLogin.js'


const router = express.Router()
router.use(express.json())

router.post("/register",registerUser)
router.post("/login",userLogin)

export default router