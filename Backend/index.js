import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRoute from "./routes/userRoute.js"
import companyRoute from "./routes/companyRoute.js"
import jobRoute from "./routes/jobRoute.js"
import applicationRoute from './routes/applicationRoute.js'
import path from 'path'
dotenv.config({})

const app=express()

// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"I am coming from backend",
//         success:true
//     })
// })
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))
const PORT=process.env.PORT ||  3000


const _dirname=path.resolve()

//api's
app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",jobRoute)
app.use("/api/v1/application",applicationRoute)


app.use(express.static(path.join(_dirname,"/Frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"))
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server running at port ${PORT}`)
})