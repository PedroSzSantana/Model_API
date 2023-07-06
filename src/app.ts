import cors from "cors";
import express from "express";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("Server"));

export default app;
