import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Video, Users, Sparkles } from "lucide-react";

const Resources: React.FC = () => {
  return (
    <div className="p-6 text-white relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Top Right Dashboard Button */}
      {/* <div className="absolute top-4 right-6">
        <Link to="/dashboard">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-blue-500 transition-transform duration-300">
            Go to Dashboard
          </button>
        </Link>
      </div> */}

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2 animate-pulse">
          <Sparkles size={36} /> Resources
        </h1>
        <p className="text-lg text-gray-300">
          Explore curated learning materials, tutorials, and support to enhance your journey.
        </p>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Study Guides */}
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={28} className="text-blue-400" />
            <h2 className="text-2xl font-semibold">Study Guides</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Step-by-step guides to using the platform effectively</li>
            <li>Notes and summaries on key topics</li>
            <li>PDFs and downloadable learning materials</li>
          </ul>
        </div>

        {/* Video Tutorials */}
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Video size={28} className="text-purple-400" />
            <h2 className="text-2xl font-semibold">Video Tutorials</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Introductory videos to get started quickly</li>
            <li>Walkthroughs for Dashboard, Daily Plan, and Avatar Chat</li>
            <li>Advanced tips for maximizing productivity</li>
          </ul>
        </div>

        {/* Community & Support */}
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Users size={28} className="text-green-400" />
            <h2 className="text-2xl font-semibold">Community & Support</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Join discussion forums for peer-to-peer help</li>
            <li>Access FAQs and troubleshooting guides</li>
            <li>Contact support for personalized assistance</li>
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">
          Ready to level up your learning experience?
        </p>
        <Link to="/dashboard">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold text-white shadow-xl hover:scale-105 transition-transform duration-300">
            Explore Dashboard Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resources;
