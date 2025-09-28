import mongoose from 'mongoose'

const appointmentSchema = mongoose.Schema({
    patientId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Patient"
    },
    doctorId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Doctor"
    },
    appointmentDate : {
        type : Date,
        required : true
    },
})

const Appointment = mongoose.model("Appointment",appointmentSchema)

export default Appointment