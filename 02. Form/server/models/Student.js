import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

export const StudentModel = mongoose.model("student", StudentSchema)