import { Link } from "react-router-dom";
import { Sun, Moon, Coffee, Sparkles } from "lucide-react";

const DailyPlan = () => {
  return (
    <div className="p-6 relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Top-right Dashboard Button */}
      {/* <div className="absolute top-4 right-6">
        <Link to="/dashboard">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-blue-500 transition-transform duration-300 font-semibold">
            Go to Dashboard
          </button>
        </Link>
      </div> */}

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3 animate-pulse">
          <Sparkles size={36} /> Your Daily Plan
        </h1>
        <p className="text-gray-300 text-lg">
          Organize your day with a structured plan to boost productivity and wellness.
        </p>
      </div>

      {/* Daily Plan Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Morning */}
        <div className="p-6 bg-gradient-to-br from-yellow-500/20 via-yellow-400/20 to-yellow-500/10 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Sun size={28} className="text-yellow-400" />
            <h2 className="text-2xl font-semibold">🌅 Morning</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Wake up early & exercise (20 mins)</li>
            <li>Healthy breakfast & hydration</li>
            <li>Review today’s goals</li>
          </ul>
        </div>

        {/* Afternoon */}
        <div className="p-6 bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-500/10 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Coffee size={28} className="text-blue-400" />
            <h2 className="text-2xl font-semibold">🌞 Afternoon</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Focused work/study session</li>
            <li>Take a short walk or stretch</li>
            <li>Have a balanced lunch</li>
          </ul>
        </div>

        {/* Evening */}
        <div className="p-6 bg-gradient-to-br from-purple-500/20 via-purple-400/20 to-purple-500/10 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Moon size={28} className="text-purple-400" />
            <h2 className="text-2xl font-semibold">🌙 Evening</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Wrap up tasks & reflect on progress</li>
            <li>Spend quality time with family/friends</li>
            <li>Read / learn something new</li>
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">
          Stay consistent and make each day productive!
        </p>
        <Link to="/dashboard">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-white shadow-xl hover:scale-105 transition-transform duration-300">
            Check Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DailyPlan;
