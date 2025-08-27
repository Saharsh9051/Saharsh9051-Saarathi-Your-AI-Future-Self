// src/layout/Layout.tsx
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { 
  Calendar, MessageCircle, BookOpen, TrendingUp, User, LogOut 
} from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const sidebarItems = [
    { id: "dashboard", icon: TrendingUp, label: "Dashboard", path: "/dashboard" },
    { id: "daily-plan", icon: Calendar, label: "Daily Plan", path: "/daily-plan" },
    { id: "avatar-chat", icon: MessageCircle, label: "Avatar Chat", path: "/avatar-chat" },
    { id: "resources", icon: BookOpen, label: "Resources", path: "/resources" },
    { id: "profile", icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg flex pt-16">
      
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 bg-gradient-to-b from-gray-900/50 to-dark-bg border-r border-white/10 min-h-screen p-6"
      >
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Welcome back,</h2>
          <p className="text-cyber-blue font-semibold">{user?.name || "Guest"} 👋</p>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05, x: 5 }}
              onClick={() => {
                setActiveTab(item.id);
                navigate(item.path); // ✅ route change
              }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? "bg-gradient-cyber text-white shadow-xl"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Logout */}
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/");
          }}
          className="w-full flex items-center space-x-3 p-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-all mt-6"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet /> {/* 👈 This changes dynamically */}
      </div>
    </div>
  );
}
