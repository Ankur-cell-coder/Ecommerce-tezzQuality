import mongoose from "mongoose";

const connectDB= async ()=>{
    try{
   
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connection suseccfull ${conn.connection.host}`)

    }catch(error){
        console.log(`error in connection ${error}`);
    }
};

export default connectDB;