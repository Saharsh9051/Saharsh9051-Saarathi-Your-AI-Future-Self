

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import DailyPlan from "./pages/DailyPlan";
import AvatarChat from "./pages/AvatarChat";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import Footer from './components/Footer';

// ✅ Toastify import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  const location = useLocation();

  // Show Navbar + Footer only on landing page `/`
  const showLayout = location.pathname === "/";

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {showLayout && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/daily-plan" element={<DailyPlan />} />
          <Route path="/avatar-chat" element={<AvatarChat />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AnimatePresence>
      {showLayout && <Footer />}

      {/* ✅ Toast container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
