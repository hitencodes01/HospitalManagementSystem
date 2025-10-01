import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    specialization : {
        type : String,
        required : true
    },
    degree : {
        type : String,
        required : true
    },
    dateOfJoining : {
        type : Date,
        required : true
    },
})

const Doctor = mongoose.model("Doctor", doctorSchema)
export default Doctor