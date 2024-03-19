import mongoose from "mongoose";

const connectDB = () => mongoose
    .connect(process.env.DB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.error(err));

export default connectDB;
