import express from 'express'
import {registerUser} from '../../controllers/user/userRegister.js'
import {userLogin} from '../../controllers/user/userLogin.js'
import { createRequest } from '../../controllers/user/createRequest.js'
import { getUser } from '../../controllers/user/getRequest.js'
import User from '../../models/model.user.js'

const router = express.Router()
router.use(express.json())

router.post("/register",registerUser)
router.post("/login",userLogin)
router.post("/user-appointment",createRequest)
router.post("/getUser",getUser)
router.get("/:_id",async(req,res)=>{
    const _id = req.params._id
    const isAdmin = await User.findById(_id)
    if(!isAdmin){
        res.status(400).json({error : "user not found"})
    }
    res.status(200).json(isAdmin)
})

export default router