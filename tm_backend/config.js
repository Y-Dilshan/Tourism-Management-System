import mongoose from "mongoose";

const mongourl = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongourl).then(() => {
            console.log("MongoDB connected successfully");
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};
