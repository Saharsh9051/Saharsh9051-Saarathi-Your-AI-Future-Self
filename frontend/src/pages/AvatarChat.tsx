import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, LayoutDashboard, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

const botResponses = {
  hello: "👋 Hi there! I'm your guide. This website helps you plan your goals, track progress, and chat with your future self avatar.",
  features: "📌 Features include: Dashboard (overview), Daily Plan (step-by-step tasks), Avatar Chat (motivation & guidance), Resources (helpful links), and Settings (customization).",
  help: "🤖 Just type what you want to know! For example, type 'dashboard', 'daily plan', or 'resources'.",
  dashboard: "📊 Dashboard gives you a quick summary of your progress and goals.",
  "daily plan": "📝 Daily Plan shows your step-by-step tasks for the day.",
  resources: "📚 Resources provides useful articles, videos, and learning materials.",
  avatar: "🧑‍🚀 Avatar Chat lets you interact with your future self for motivation and guidance.",
  default: "✨ I’m still learning! Try asking about 'features', 'dashboard', 'daily plan', or 'resources'.",
};

const AvatarChat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Welcome! I'm your friendly guide. Ask me anything about this website." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Bot reply logic
    const lowerInput = input.toLowerCase();
    let botReply = botResponses.default;
    for (let key in botResponses) {
      if (lowerInput.includes(key)) {
        botReply = botResponses[key];
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Bot className="text-purple-400" size={28} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Avatar Chat
          </h1>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl shadow-lg transition"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-3 p-3 bg-gray-800/60 rounded-xl backdrop-blur-md border border-gray-700 shadow-inner">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`p-3 rounded-xl max-w-xs ${
              msg.sender === "user"
                ? "ml-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                : "bg-gray-700 text-gray-200 border border-gray-600"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl w-fit"
          >
            ⌛ saarathi is typing...
          </motion.div>
        )}
      </div>

      {/* Input Box */}
      <div className="flex items-center mt-4 bg-gray-800/70 p-2 rounded-xl border border-gray-700">
        <input
          type="text"
          placeholder="💬 Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white px-2 placeholder-gray-400"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-105 transition shadow-md"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AvatarChat;
