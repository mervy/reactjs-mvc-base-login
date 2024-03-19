import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isActive: { type: Boolean, default: true, required: true },
    },
    {
        timestamps: true, //Cria automaticamente o createdAt e updateAt
    },
);

export default mongoose.model("User", userSchema, "users"); //Último dado é a coleção a ser usada
