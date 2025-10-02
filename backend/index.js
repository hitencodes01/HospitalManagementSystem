import express from 'express'
import admin from './routes/admin/admin.js'
import user from './routes/user/user.js'
import { connectDB } from './db/connectDB.js';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())
app.use("/admin",admin)
app.use("/user",user)
app.listen(8000,()=>{
    connectDB()
    console.log(`you are listening on port 8000`)
})