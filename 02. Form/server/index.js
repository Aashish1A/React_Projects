import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { StudentModel } from "./models/Student.js";

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

app.post("/register", (req,res)=>{
    StudentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running");
})