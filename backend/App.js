import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import goalRoutes from "./src/routes/goalRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import profileRoutes from "./src/routes/profileRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";



dotenv.config();
console.log("🔑 Gemini Key (first 10 chars):", process.env.GEMINI_API_KEY?.substring(0, 10));

const app = express();

app.use(express.json());

//cors setup
app.use(
  cors({
    origin: "http://localhost:5174", // frontend ka port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// serve uploaded files (so frontend can display avatar)
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);

// ✅ MongoDB se connect hone ke baad hi server start hoga
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error("❌ MongoDB connection error:", err);
});
