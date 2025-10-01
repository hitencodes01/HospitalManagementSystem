import express from 'express'
import patient from './routes/patient/index.js'
import doctor from './routes/doctor/index.js'
import { connectDB } from './db/connectDB.js';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())
app.use("/patient",patient)
app.use("/doctor",doctor)
app.listen(8000,()=>{
    connectDB()
    console.log(`you are listening on port 8000`)
})