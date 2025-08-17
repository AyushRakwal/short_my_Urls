import { serverConfig } from ".";
import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect(serverConfig.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error("MongoDB connection error", error);
        throw error;
    }
}