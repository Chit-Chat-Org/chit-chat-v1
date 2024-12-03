import express from "express";
import dotenv from "dotenv";
import register from "./api/v0.1/controllers/register";
import control from "./api/v0.1/controllers/product.control";
dotenv.config();
import "./api/v0.1/config/mongodb";
import bodyParser from "body-parser";
import fileupload from "express-fileupload";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8001;
// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(fileupload());
// API Routes
app.use("/", register);
app.use("/api/v1", control);
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/health", (req, res) => {
    res.status(200).json("Hello World !");
});
app.listen(PORT, () => {
    console.log(`Connected to PORT ${PORT}`);
});
