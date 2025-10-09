import express from 'express'
import admin from './routes/admin/admin.js'
import user from './routes/user/user.js'
import { connectDB } from './db/connectDB.js';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use("/admin",admin)
app.use("/user",user)


app.listen(8000,async()=>{
    await connectDB()
    console.log(`you are listening on port 8000`)
})