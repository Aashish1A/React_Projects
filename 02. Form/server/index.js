import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { StudentModel } from "./models/Student.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/student");

app.post("/login", (req,res)=>{
    const {email, password} = req.body;
    StudentModel.findOne({email: email})
    .then(user=> {
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("Wrong password")
            }
        }else{
            res.json("No record exists")
        }
    })
})

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the user with the hashed password
        const newUser = await StudentModel.create({ name, email, password: hashedPassword });
        res.json({ message: "User registered successfully", user: newUser });
    } catch (err) {
        res.status(500).json({ error: "Error registering user", details: err });
    }
});

app.listen(3001, ()=>{
    console.log("Server is running");
})