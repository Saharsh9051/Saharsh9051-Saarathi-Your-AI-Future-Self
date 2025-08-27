
import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  steps: [String] // Array of steps
});

export default mongoose.model("Roadmap", roadmapSchema);
