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
        disease : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            required : true
        },
    })
const Patient = mongoose.model("Patient",patientSchema)
export default Patient