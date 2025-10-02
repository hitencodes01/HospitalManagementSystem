import express from 'express'
import Admin from '../../models/mode.admin.js'
const router = express.Router()
router.use(express.json())

router.post("/",async(req,res)=>{
    const {name , email , password} = await req.body;
    const emailExist = await Admin.find({email})
    if(!emailExist){
        res.json({error : "email already exist"})
    }
   const response = await Admin.create({name , email , password})
   if(!response){
    res.status(400).json({error : "cannot registered admin"})
   }
   res.status(201).json({message : "admin succesfully registered"})
})

export default router