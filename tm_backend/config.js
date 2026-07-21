// config.js
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables here
dotenv.config();

const mongourl = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        if (!mongourl) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(mongourl);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;