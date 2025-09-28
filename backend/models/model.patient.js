import mongoose from 'mongoose'
const patientSchema = mongoose.Schema({
        name : {
            type : String,
            required: true
        },
        age : {
            type : Number,
            required : true
        },
    })
const Patient = mongoose.model("Patient",patientSchema)
export default Patient