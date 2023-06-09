import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'

//configure env
dotenv.config()

//database config
connectDB();

const app=express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);


//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to ecommerce app'
    })
})

//PORT
const PORT=process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})