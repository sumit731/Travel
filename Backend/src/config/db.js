import mongoose from "mongoose";

const connectDB = async(req, res) => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    }
    catch(error){
        console.log("Error in DB Connection", error);
        process.exit(1);
    }
}

export default connectDB;