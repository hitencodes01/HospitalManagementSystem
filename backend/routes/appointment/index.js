import express from 'express'
const router = express.Router()
router.use(express.json())

router.get("/:name", async(req,res)=>{
    const doctorName = req.params.name
    const {doctor_id} = Doctor.find({doctorName})

})