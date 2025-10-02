import express from 'express'
import Patient from '../../models/model.patient.js'
const router = express.Router()
router.get("/",async(req,res)=>{
    const patients = await Patient.find({})
    res.send(patients)
})
router.post("/",async (req,res) => {
    const {name , age , disease , father_name , date_of_appointment} = req.body
    const response = await Patient.create({name , age , disease , father_name , date_of_appointment})
    if(!response){
        res.status(400).json({error:"cannot post"})
    }
    res.status(201).json({message : "succesful post"})
})
export default router