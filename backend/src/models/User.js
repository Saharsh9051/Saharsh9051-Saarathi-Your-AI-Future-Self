import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // url or upload paths
  avatar: { type: String, default: "" },

  
  phone: { type: String },
  location: { type: String },
  bio: { type: String },
  goal: { type: String },
  joinDate: { type: Date, default: Date.now }


}, { timestamps: true });

export default mongoose.model("User", userSchema);
