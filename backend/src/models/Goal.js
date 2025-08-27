import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema({
  goalName: { type: String, required: true, unique: true },
  roadmap: { type: Object, required: true }
});

export default mongoose.model('Goal', GoalSchema);
