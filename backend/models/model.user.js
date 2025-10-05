import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  disease: {
    type: String,
  },
  father_name: {
    type: String,
  },
  date_of_appointment: {
    type: Date,
  },
  request : {
    type : [mongoose.Schema.Types.ObjectId],
    ref : "Request"
  }
});
const User = mongoose.model("User", userSchema);
export default User;
