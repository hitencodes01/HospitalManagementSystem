import express from 'express'
import patient from './routes/patient/index.js'
import { connectDB } from './db/connectDB.js';
const app = express();
app.use(cors())
app.use(express.json())
app.use("/patient",patient)
app.listen(8000,()=>{
    connectDB()
    console.log(`you are listening on port 8000`)
})