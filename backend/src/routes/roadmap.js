import express from 'express';
import Goal from '../models/Goal.js';
import generateAIResponse from '../ai/generateAIResponse.js';

const router = express.Router();

// POST: Get roadmap for a goal
router.post('/', async (req, res) => {
  const { goal } = req.body;

  try {
    // 1. Check DB first
    let goalData = await Goal.findOne({ goalName: goal });

    // 2. If found in DB → return
    if (goalData) {
      return res.json({ source: 'database', data: goalData });
    }

    // 3. Else generate via AI
    const aiResult = await generateAIResponse(goal);

    // 4. Save in DB
    const newGoal = new Goal({
      goalName: goal,
      roadmap: aiResult
    });
    await newGoal.save();

    res.json({ source: 'ai', data: newGoal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
