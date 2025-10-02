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
        father_name : {
            type : String,
            required : true
        },
        date_of_appointment : {
            type : Date,
            required : true
        },
    })
const Patient = mongoose.model("Patient",patientSchema)
export default Patient