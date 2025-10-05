import mongoose from 'mongoose'
const requestSchema = mongoose.Schema({
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
            required : true,
        },
        date_of_request : {
            type : Date,
            required : true
        },
        date_of_appointment : {
            type : Date,
        },
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    })
const Request = mongoose.model("Request",requestSchema)
export default Request