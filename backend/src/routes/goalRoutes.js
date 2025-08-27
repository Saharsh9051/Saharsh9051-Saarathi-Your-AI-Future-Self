import express from "express";
import Goal from "../models/Goal.js";
import { generateGoalPlan } from "../services/aiService.js"; // Gemini AI service import

const router = express.Router();

// Search + AI fallback
router.get("/search", async (req, res) => {
  try {
    const { q } = req.query; 
    if (!q) return res.status(400).json({ error: "Query missing" });

    
    let goal = await Goal.findOne({
      goalName: { $regex: q, $options: "i" }
    });

  
    if (goal) {
      return res.json({
        from: "db",
        goal
      });
    }

    
    const aiPlan = await generateGoalPlan(q);

    if (!aiPlan) {
      return res.status(500).json({ error: "AI generation failed" });
    }

    
    goal = new Goal({
      goalName: q,
      overview: aiPlan.overview,
      fullStrategy: aiPlan.fullStrategy,
      flowchart: aiPlan.flowchart,
      roadmap: aiPlan.fullStrategy 
    });

    await goal.save();

    
    return res.json({
      from: "ai",
      goal
    });

  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
