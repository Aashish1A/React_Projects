import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { StudentModel } from "./models/Student.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/student");

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await StudentModel.findOne({ email: email });
        if (!user) {
            console.log("No record exists");
            return res.status(404).json({ message: "No record exists" });
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            console.log("Wrong password");
            return res.status(401).json({ message: "Wrong password" });
        }
        console.log("Login Successful");
        res.json({ message: "Login Successful" });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ error: "Error during login", details: err });
    }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user with the hashed password
    const newUser = await StudentModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Error registering user", details: err });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
