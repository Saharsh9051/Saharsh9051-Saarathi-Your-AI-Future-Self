import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { 
  Calendar, 
  MessageCircle, 
  BookOpen, 
  TrendingUp, 
  User, 
  Settings, 
  Bell,
  Target,
  Brain,
  Zap,
  CheckCircle,
  Clock,
  Award,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'Dashboard', icon: TrendingUp, label: 'Dashboard' },
    { id: 'daily-plan', icon: Calendar, label: 'Daily Plan' },
    { id: 'avatar-chat', icon: MessageCircle, label: 'Avatar Chat' },
    { id: 'resources', icon: BookOpen, label: 'Resources' },
    { id: 'profile', icon: User, label: 'Profile' },
    // { id: 'progress', icon: Target, label: 'Progress' },
    // { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const todaysTasks = [
    { id: 1, title: 'Mathematics - Calculus Practice', completed: true, time: '09:00 AM' },
    { id: 2, title: 'Physics - Thermodynamics Review', completed: true, time: '10:30 AM' },
    { id: 3, title: 'Chemistry - Organic Reactions', completed: false, time: '02:00 PM' },
    { id: 4, title: 'English - Essay Writing', completed: false, time: '04:00 PM' },
    { id: 5, title: 'Meditation & Mindfulness', completed: false, time: '06:00 PM' },
  ];

  const stats = [
    { label: 'Study Hours Today', value: '6.5h', icon: Clock, color: 'cyber-blue' },
    { label: 'Tasks Completed', value: '12/15', icon: CheckCircle, color: 'neon-green' },
    { label: 'Current Streak', value: '23 days', icon: Award, color: 'cyber-purple' },
    { label: 'Focus Score', value: '94%', icon: Brain, color: 'pink-500' },
  ];
   const user = JSON.parse(localStorage.getItem("user") || "{}");
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-dark-bg pt-16">
      <div className="flex">
        
       {/* Sidebar*/}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-64 bg-gradient-to-b from-gray-900/50 to-dark-bg border-r border-white/10 min-h-screen p-6"
        >
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Welcome back,</h2>
            <p className="text-cyber-blue font-semibold">{user?.name || "Guest"}  👋</p>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05, x: 5 }}
                onClick={() =>{
                setActiveTab(item.id);
                // 👇 Navigate according to the id
                if (item.id === "profile") navigate("/profile");
                else if (item.id === "daily-plan") navigate("/daily-plan");
                else if (item.id === "avatar-chat") navigate("/avatar-chat");
                else if (item.id === "resources") navigate("/resources");
                else if (item.id === "progress") navigate("/progress");
                else if (item.id === "settings") navigate("/settings");
                else if (item.id === "overview") navigate("/dashboard");
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${
                  activeTab === item.id

                    ? 'bg-gradient-cyber text-white shadow-xl'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
            
          </nav>
          
         {/* 🚀 Logout button */}
         
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
        {/* 👈 yeh close tag ab sahi hai */}

        {/* Main Content */}
       <div className="flex-1 p-8">
         {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-300">Track your progress and stay motivated</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="relative glass-morphism p-3 rounded-xl"
              >
                <Bell size={20} className="text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
              </motion.button>
              
              <div className="w-10 h-10 bg-gradient-cyber rounded-xl flex items-center justify-center">
                 <User size={24} className="text-white" />
               </div>
             </div>
           </motion.div>

           {/* Stats Grid */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-morphism p-6 rounded-2xl card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${stat.color} to-${stat.color}/70 rounded-xl flex items-center justify-center`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <Zap size={16} className="text-cyber-blue" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Daily Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-morphism p-6 rounded-3xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Today's Schedule</h3>
                <Calendar size={24} className="text-cyber-blue" />
              </div>
              
              <div className="space-y-4">
                {todaysTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      task.completed
                        ? 'bg-neon-green/10 border-neon-green/30'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        task.completed
                          ? 'bg-neon-green border-neon-green'
                          : 'border-gray-500'
                      }`}>
                        {task.completed && <CheckCircle size={16} className="text-white" />}
                      </div>
                      <div>
                        <p className={`font-medium ${task.completed ? 'text-neon-green line-through' : 'text-white'}`}>
                          {task.title}
                         </p>
                        <p className="text-gray-400 text-sm">{task.time}</p>
                      </div>
                     </div>
                   </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-6 bg-gradient-cyber text-white py-3 rounded-xl font-semibold"
              >
                View Full Schedule
              </motion.button>
            </motion.div>

            {/* Avatar Chat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-morphism p-6 rounded-3xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Chat with Future Self</h3>
                <MessageCircle size={24} className="text-cyber-blue" />
              </div>

              {/* Avatar */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-cyber rounded-full flex items-center justify-center shadow-xl">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Your Future Self</p>
                  <p className="text-green-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                    Online
                  </p>
                </div>
              </div>

              {/* Recent Messages */}
              <div className="space-y-4 mb-6">
                <div className="bg-cyber-blue/20 p-4 rounded-xl ml-4">
                  <p className="text-white text-sm">
                    "Great job completing your morning tasks! Remember, consistency is key to achieving your IIT dreams."
                  </p>
                  <p className="text-gray-400 text-xs mt-2">2 minutes ago</p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl mr-4">
                  <p className="text-white text-sm">
                    "I'm feeling overwhelmed with today's chemistry topics. Any tips?"
                  </p>
                  <p className="text-gray-400 text-xs mt-2">5 minutes ago</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Ask your future self..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-cyber text-white px-4 py-2 rounded-xl"
                >
                  <MessageCircle size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Progress Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 glass-morphism p-6 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Progress Overview</h3>
            <div className="h-64 bg-gradient-to-br from-cyber-blue/10 via-cyber-purple/10 to-neon-green/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <TrendingUp size={48} className="text-cyber-blue mx-auto mb-4" />
                <p className="text-white text-lg font-semibold">Interactive Progress Chart</p>
                <p className="text-gray-300">Detailed analytics coming soon</p>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;




