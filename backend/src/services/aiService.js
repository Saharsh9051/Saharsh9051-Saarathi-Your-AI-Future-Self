
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateGoalPlan(userGoal) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

  const prompt = `
  User ka goal: "${userGoal}"

  Tumhara kaam hai hamesha sirf aur sirf valid JSON dena.
  Koi explanation, intro ya code block markers (like \`\`\`) nahi dena.

  {
    "overview": "short motivation + key points",
    "fullStrategy": "step by step roadmap (detailed)",
    "flowchart": "mermaid.js format (flowchart TD; ...)",
    "roadmap": "short summary roadmap steps"
  }
  `;

  try {
    const result = await model.generateContent(prompt);
    let raw = result.response.text();

    console.log("🔍 Gemini RAW Response:", raw);

    // Agar Gemini \`\`\`json ... \`\`\` bhejta hai to remove karna
    raw = raw.replace(/```json|```/g, "").trim();

    const parsed = JSON.parse(raw);

    // Roadmap agar missing ho to fallback
    if (!parsed.roadmap) {
      parsed.roadmap = parsed.fullStrategy || "Roadmap not available";
    }

    return parsed;
  } catch (err) {
    console.error("❌ AI Service Error:", err.message);
    return {
      overview: "Please try again later.",
      fullStrategy: "Please try again later.",
      flowchart: "flowchart TD; A[Error] --> B[Try again later]",
      roadmap: "Please try again later."
    };
  }
}
