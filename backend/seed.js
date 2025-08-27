// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Goal from "./src/models/Goal.js"; 

dotenv.config();

// ---------- SEED DATA START ----------
const SEED_GOALS = [
  {
    goalName: "Class 10 Topper",
    roadmap: {
      overview: {
        summary:
          "To top in Class 10, focus on NCERT mastery, daily revision, weekly tests, and completing 3 full revision cycles.",
        key_points: [
          "Daily 2–3 focused study sessions (45–60 mins each)",
          "Complete NCERT + previous year questions",
          "Weekly mock tests + maintain an error log",
          "3 full revision cycles (T1/T2/T3)"
        ]
      },
      fullStrategy: {
        total_duration: "5–6 months",
        phases: [
          {
            title: "Foundation & NCERT Mastery",
            duration: "8 weeks",
            objectives: [
              "Master Maths/Science NCERT line-by-line",
              "Memorize key facts in Social Science",
              "Improve English grammar + reading"
            ],
            tasks: [
              "Daily 3 subjects x 45–60 mins",
              "Practice NCERT examples + back exercises",
              "Maintain an error log"
            ],
            deliverables: [
              "Maths & Science NCERT fully completed",
              "English grammar notes ready"
            ]
          },
          {
            title: "PYQs + Sample Papers",
            duration: "6 weeks",
            objectives: ["Understand exam patterns", "Improve speed & accuracy"],
            tasks: [
              "Solve last 5 years’ PYQs for all major subjects",
              "Alternate-day timed sectionals",
              "Re-learn weak topics"
            ],
            deliverables: ["PYQ notebook", "Average score ≥ 80% in sectionals"]
          },
          {
            title: "Mock Series & Revisions",
            duration: "6 weeks",
            objectives: ["Stamina & time management", "Exam temperament"],
            tasks: [
              "Weekly full syllabus mock tests",
              "Analyze each mock within 24 hours",
              "Prepare cheat-sheets & flashcards"
            ],
            deliverables: ["10 full mocks completed", "T1/T2/T3 revisions done"]
          }
        ]
      },
      flowchart: {
        mermaid: `graph TD
A[Start]-->B[NCERT Mastery]
B-->C[PYQs + Sample Papers]
C-->D[Full Mocks + Analysis]
D-->E[3 Revisions]
E-->F[Board Exams]`
      },
      tree: {
        root: {
          title: "Class 10 Topper",
          children: [
            { title: "NCERT", children: [{ title: "Maths" }, { title: "Science" }, { title: "SST" }] },
            { title: "PYQs", children: [{ title: "5 yrs" }] },
            { title: "Mocks", children: [{ title: "10+" }] }
          ]
        }
      }
    }
  },
  {
    goalName: "Class 12 Topper (Science)",
    roadmap: {
      overview: {
        summary:
          "To top in Class 12 Science, combine textbooks with selected reference books, practice numericals daily, and prepare weekly for practicals/files.",
        key_points: [
          "Daily Physics/Chemistry numericals",
          "Biology/English high-yield notes",
          "Weekly unit tests",
          "Revision cycles with formula sheets"
        ]
      },
      fullStrategy: {
        total_duration: "6 months",
        phases: [
          {
            title: "Syllabus Completion",
            duration: "10 weeks",
            objectives: ["Finish textbooks", "Selective reference book use"],
            tasks: [
              "Daily 3-hour study slot",
              "Physics/Chemistry numericals",
              "Biology diagrams practice"
            ],
            deliverables: ["100% syllabus complete", "Short notes per chapter"]
          },
          {
            title: "PYQs + Sample Papers",
            duration: "6 weeks",
            objectives: ["Understand pattern & marking scheme"],
            tasks: [
              "Solve last 7 years board PYQs",
              "Practice CBSE sample papers",
              "Answer as per marking scheme"
            ],
            deliverables: ["Answer templates", "Score ≥ 85% in samples"]
          },
          {
            title: "Mock & Practical Prep",
            duration: "8 weeks",
            objectives: ["Time management", "Practical viva readiness"],
            tasks: [
              "Weekly full mocks",
              "Complete practical files",
              "Formula/Reaction sheets"
            ],
            deliverables: ["8 full mocks", "Practical ready"]
          }
        ]
      },
      flowchart: {
        mermaid: `graph TD
A[Start]-->B[Syllabus Finish]
B-->C[PYQs + Sample Papers]
C-->D[Full Mocks]
D-->E[Practical & Viva]
E-->F[Boards]`
      },
      tree: {
        root: {
          title: "Class 12 Topper (Science)",
          children: [
            { title: "Physics", children: [{ title: "Numericals" }, { title: "Derivations" }] },
            { title: "Chemistry", children: [{ title: "Reactions" }, { title: "Numericals" }] },
            { title: "Biology", children: [{ title: "Diagrams" }, { title: "NCERT Lines" }] }
          ]
        }
      }
    }
  },
  {
    goalName: "Crack IIT-JEE",
    roadmap: {
      overview: {
        summary:
          "To crack IIT-JEE, follow a loop of Concept → Problem Sets → Mixed Mocks → Advanced Analysis.",
        key_points: [
          "HCV/NCERT + standard material",
          "Daily 2 blocks of PCM practice",
          "Weekly part test, monthly full test",
          "Error log & spaced revision"
        ]
      },
      fullStrategy: {
        total_duration: "8–9 months (intensive)",
        phases: [
          {
            title: "Concept Build (PCM)",
            duration: "12 weeks",
            objectives: ["Strong fundamentals", "Quality examples"],
            tasks: [
              "Physics: HCV + examples",
              "Chemistry: NCERT + selected advanced books",
              "Math: standard problem sets"
            ],
            deliverables: ["Formula sheet", "Tagged examples"]
          },
          {
            title: "Problem Solving Drill",
            duration: "12 weeks",
            objectives: ["Speed & accuracy", "Mixed difficulty"],
            tasks: [
              "Daily 90–120 mins PCM practice",
              "Topicwise & mixed sets",
              "Weekly part tests"
            ],
            deliverables: ["Error log v2", "Avg ≥ 60% part tests"]
          },
          {
            title: "Mock Phase (Mains → Advanced)",
            duration: "10 weeks",
            objectives: ["Exam temperament", "Advanced pattern familiarity"],
            tasks: [
              "Alternate-day Mains pattern mocks",
              "Biweekly Advanced pattern",
              "Analyze & reattempt within 24 hours"
            ],
            deliverables: ["10+ Mains mocks", "6+ Advanced mocks"]
          }
        ]
      },
      flowchart: {
        mermaid: `graph TD
A[Start]-->B[Concept Build]
B-->C[Problem Solving Drill]
C-->D[Mocks: Mains -> Advanced]
D-->E[Final Revision]
E-->F[JEE Exam]`
      },
      tree: {
        root: {
          title: "IIT-JEE",
          children: [
            { title: "Physics" }, { title: "Chemistry" }, { title: "Maths" },
            { title: "Mocks" }, { title: "Revision" }
          ]
        }
      }
    }
  },
  {
    goalName: "Become Software Engineer",
    roadmap: {
      overview: {
        summary:
          "To become a Software Engineer, follow a compact roadmap of CS fundamentals + DSA + Projects + Git/Profile + Interview prep.",
        key_points: [
          "Language + DSA in 3–4 months",
          "3–4 projects with increasing scope",
          "Optimize GitHub + LinkedIn",
          "Practice mock interviews"
        ]
      },
      fullStrategy: {
        total_duration: "6 months",
        phases: [
          {
            title: "Foundations",
            duration: "6 weeks",
            objectives: ["Language + OOP", "Basic DSA"],
            tasks: [
              "Daily 1–1.5h coding practice",
              "Arrays/Strings/Hashmaps",
              "Maintain notes & spaced repetition"
            ],
            deliverables: ["DSA journal", "100 practice questions"]
          },
          {
            title: "Projects & Web Backend",
            duration: "6 weeks",
            objectives: ["Build portfolio projects"],
            tasks: [
              "2 medium projects (REST, DB)",
              "Authentication, CRUD, deployment",
              "Write proper READMEs"
            ],
            deliverables: ["2 deployed apps", "Clean repos"]
          },
          {
            title: "Advanced + Interview",
            duration: "8 weeks",
            objectives: ["Systems & interview prep"],
            tasks: [
              "System design basics",
              "Behavioral interview stories (STAR method)",
              "Mock interviews + apply for jobs"
            ],
            deliverables: ["Updated resume", "Interview kit ready"]
          }
        ]
      },
      flowchart: {
        mermaid: `graph TD
A[Start]-->B[Language + DSA]
B-->C[Projects + Backend]
C-->D[Advanced + Interview]
D-->E[Apply/Interviews]
E-->F[Offer]`
      },
      tree: {
        root: {
          title: "Software Engineer",
          children: [
            { title: "Language & DSA" },
            { title: "Projects" },
            { title: "System Design" },
            { title: "Interviews" }
          ]
        }
      }
    }
  }
];
// ---------- SEED DATA END ----------

async function main() {
  try {
    const uri = process.env.MONGO_URI; // make sure MONGO_URI is set in .env
    if (!uri) throw new Error("MONGO_URI missing in .env");

    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");

    // Optional: clear existing documents with the same goalName
    await Goal.deleteMany({ goalName: { $in: SEED_GOALS.map(g => g.goalName) } });
    console.log("🗑️ Removed old documents for same goals");

    await Goal.insertMany(SEED_GOALS);
    console.log("🌱 Inserted seed goals:", SEED_GOALS.map(g => g.goalName).join(", "));

    await mongoose.disconnect();
    console.log("✅ Done.");
    process.exit(0);
  } catch (e) {
    console.error("❌ Seed error:", e);
    process.exit(1);
  }
}

main();
