import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: String
})

export const StudentModel = mongoose.model("student", StudentSchema)