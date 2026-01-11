import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import uploadRoutes from "./routes/uploadRoutes.js";
import backstoryRoutes from "./routes/backstoryRoutes.js";
import consistencyRoutes from "./routes/consistencyRoutes.js";
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(uploadRoutes);
app.use(backstoryRoutes);
app.use(consistencyRoutes);
console.log("Groq Key Loaded:", process.env.GROQ_API_KEY ? "YES" : "NO");

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
