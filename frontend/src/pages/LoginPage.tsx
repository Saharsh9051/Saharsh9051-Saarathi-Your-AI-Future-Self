// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Eye, EyeOff, Mail, Phone, Lock, User, ArrowRight, Sparkles } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     name: ''
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isLoading, setIsLoading] = useState(false);

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!isLogin && !formData.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!isLogin && !/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!isLogin && !formData.name) {
//       newErrors.name = 'Name is required';
//     }

//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;

//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       // Store user data in localStorage for demo
//       localStorage.setItem('user', JSON.stringify({
//         email: formData.email,
//         name: formData.name || 'User',
//         isLoggedIn: true
//       }));
//       navigate('/home');
//     }, 1500);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // Clear error when user starts typing
//     if (errors[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: ''
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-dark-bg flex items-center justify-center relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="animated-bg" />
//       <div className="absolute top-20 left-20 w-80 h-80 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-glow" />
//       <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-float-complex" />

//       {/* Floating Elements */}
//       {[...Array(12)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute career-float"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             x: [0, 15, -10, 0],
//             rotate: [0, 180, 360],
//           }}
//           transition={{
//             duration: 8 + i,
//             repeat: Infinity,
//             delay: i * 0.5,
//           }}
//         >
//           <div className="w-6 h-6 bg-gradient-cyber rounded-full opacity-30 blur-sm" />
//         </motion.div>
//       ))}

//       <div className="relative z-10 w-full max-w-md mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50, scale: 0.9 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="glass-card p-8 rounded-3xl"
//         >
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <motion.div
//               animate={{ rotate: [0, 360] }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="inline-block mb-4"
//             >
//               <Sparkles size={48} className="text-cyber-blue" />
//             </motion.div>
//             <h1 className="text-3xl font-bold text-gradient font-space">Saarathi</h1>
//             <p className="text-gray-300 mt-2">Your AI Career Companion</p>
//           </div>

//           {/* Toggle Buttons */}
//           <div className="flex mb-8 bg-white/10 rounded-2xl p-1">
//             <button
//               onClick={() => setIsLogin(true)}
//               className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
//                 isLogin 
//                   ? 'bg-gradient-cyber text-white shadow-lg' 
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setIsLogin(false)}
//               className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
//                 !isLogin 
//                   ? 'bg-gradient-cyber text-white shadow-lg' 
//                   : 'text-gray-300 hover:text-white'
//               }`}
//             >
//               Sign Up
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Field (Sign Up Only) */}
//             {!isLogin && (
//               <div>
//                 <div className="relative">
//                   <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={`w-full bg-white/10 border ${
//                       errors.name ? 'border-red-500' : 'border-white/20'
//                     } rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors`}
//                   />
//                 </div>
//                 {errors.name && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-400 text-sm mt-2"
//                   >
//                     {errors.name}
//                   </motion.p>
//                 )}
//               </div>
//             )}

//             {/* Email Field */}
//             <div>
//               <div className="relative">
//                 <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full bg-white/10 border ${
//                     errors.email ? 'border-red-500' : 'border-white/20'
//                   } rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors`}
//                 />
//               </div>
//               {errors.email && (
//                 <motion.p
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-red-400 text-sm mt-2"
//                 >
//                   {errors.email}
//                 </motion.p>
//               )}
//             </div>

//             {/* Phone Field (Sign Up Only) */}
//             {!isLogin && (
//               <div>
//                 <div className="relative">
//                   <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`w-full bg-white/10 border ${
//                       errors.phone ? 'border-red-500' : 'border-white/20'
//                     } rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors`}
//                   />
//                 </div>
//                 {errors.phone && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-400 text-sm mt-2"
//                   >
//                     {errors.phone}
//                   </motion.p>
//                 )}
//               </div>
//             )}

//             {/* Password Field */}
//             <div>
//               <div className="relative">
//                 <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`w-full bg-white/10 border ${
//                     errors.password ? 'border-red-500' : 'border-white/20'
//                   } rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <motion.p
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-red-400 text-sm mt-2"
//                 >
//                   {errors.password}
//                 </motion.p>
//               )}
//             </div>

//             {/* Confirm Password (Sign Up Only) */}
//             {!isLogin && (
//               <div>
//                 <div className="relative">
//                   <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     placeholder="Confirm Password"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className={`w-full bg-white/10 border ${
//                       errors.confirmPassword ? 'border-red-500' : 'border-white/20'
//                     } rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors`}
//                   />
//                 </div>
//                 {errors.confirmPassword && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-400 text-sm mt-2"
//                   >
//                     {errors.confirmPassword}
//                   </motion.p>
//                 )}
//               </div>
//             )}

//             {/* Forgot Password Link (Login Only) */}
//             {isLogin && (
//               <div className="text-right">
//                 <button
//                   type="button"
//                   className="text-cyber-blue hover:text-white transition-colors text-sm"
//                 >
//                   Forgot Password?
//                 </button>
//               </div>
//             )}

//             {/* Submit Button */}
//             <motion.button
//               type="submit"
//               disabled={isLoading}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-gradient-cyber text-white py-4 rounded-xl font-semibold text-lg shadow-xl glow flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <div className="loading-spinner" />
//               ) : (
//                 <>
//                   <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
//                   <ArrowRight size={20} />
//                 </>
//               )}
//             </motion.button>
//           </form>

//           {/* Additional Links */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-300">
//               {isLogin ? "Don't have an account? " : "Already have an account? "}
//               <button
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="text-cyber-blue hover:text-white transition-colors font-semibold"
//               >
//                 {isLogin ? 'Sign Up' : 'Sign In'}
//               </button>
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };



// export default LoginPage;





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { login, signup } from "../api/auth";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // 🔹 input handle
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔹 validation
//   const validateForm = () => {
//     if (!formData.email || !formData.password) {
//       alert("Please fill all required fields");
//       return false;
//     }
//     if (!isLogin && !formData.name) {
//       alert("Name is required for signup");
//       return false;
//     }
//     return true;
//   };

//   // 🔹 submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       let res;
//       if (isLogin) {
//         res = await login({
//           email: formData.email,
//           password: formData.password,
//         });
//       } else {
//         res = await signup({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         });
//       }

//       // token + user save
//       if (res.data.token) {
//         localStorage.setItem("token", res.data.token);
//       }
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // navigate
//       navigate("/home");
//     } catch (err: any) {
//       console.error(err);
//       alert(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700"
//       >
//         {/* Title */}
//         <div className="flex items-center justify-center gap-2 mb-8">
//           <Sparkles className="text-indigo-400" size={28} />
//           <h2 className="text-3xl font-bold text-white">
//             {isLogin ? "Welcome Back" : "Create Account"}
//           </h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {!isLogin && (
//             <div className="relative">
//               <User className="absolute left-3 top-3 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           )}

//           <div className="relative">
//             <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full pl-10 pr-10 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-3 text-gray-400"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           <motion.button
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl font-medium shadow-lg transition"
//           >
//             {isLoading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
//             <ArrowRight size={18} />
//           </motion.button>
//         </form>

//         {/* Toggle */}
//         <p className="text-gray-400 text-center mt-6">
//           {isLogin ? "New user?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-indigo-400 hover:underline"
//           >
//             {isLogin ? "Create one" : "Login here"}
//           </button>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   Lock,
//   User,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { login, signup } from "../api/auth";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // 🔹 input handle
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔹 validation
//   const validateForm = () => {
//     if (!formData.email || !formData.password) {
//       alert("Please fill all required fields");
//       return false;
//     }
//     if (!isLogin && !formData.name) {
//       alert("Name is required for signup");
//       return false;
//     }
//     return true;
//   };

//   // 🔹 submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       let res;
//       if (isLogin) {
//         res = await login({
//           email: formData.email,
//           password: formData.password,
//         });
//       } else {
//         res = await signup({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         });
//       }

//       // token + user save
//       if (res.data.token) {
//         localStorage.setItem("token", res.data.token);
//       }
//       if (res.data.user) {
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//       }

//       // navigate
//       navigate("/home");
//     } catch (err: any) {
//       console.error(err);

//       const errorMsg =
//         err.response?.data?.error || err.response?.data?.message;

//       if (errorMsg === "User not found") {
//         alert("❌ You don’t have an account. Please sign up first!");
//       } else if (errorMsg === "User already exists") {
//         alert("⚠️ You already have an account. Please login!");
//       } else if (errorMsg === "Invalid credentials") {
//         alert("🔑 Wrong password. Try again!");
//       } else {
//         alert(errorMsg || "Something went wrong. Please try again.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700"
//       >
//         {/* Title */}
//         <div className="flex items-center justify-center gap-2 mb-8">
//           <Sparkles className="text-indigo-400" size={28} />
//           <h2 className="text-3xl font-bold text-white">
//             {isLogin ? "Welcome Back" : "Create Account"}
//           </h2>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {!isLogin && (
//             <div className="relative">
//               <User className="absolute left-3 top-3 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           )}

//           <div className="relative">
//             <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full pl-10 pr-10 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-3 text-gray-400"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           <motion.button
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl font-medium shadow-lg transition"
//           >
//             {isLoading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
//             <ArrowRight size={18} />
//           </motion.button>
//         </form>

//         {/* Toggle */}
//         <p className="text-gray-400 text-center mt-6">
//           {isLogin ? "New user?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-indigo-400 hover:underline"
//           >
//             {isLogin ? "Create one" : "Login here"}
//           </button>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../api/auth";

// ✅ Toastify import
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔹 input handle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 validation
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast.warn("⚠️ Please fill all required fields");
      return false;
    }
    if (!isLogin && !formData.name) {
      toast.warn("⚠️ Name is required for signup");
      return false;
    }
    return true;
  };

  // 🔹 submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      let res;
      if (isLogin) {
        res = await login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        res = await signup({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      // token + user save
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      // ✅ Success toast
      toast.success(isLogin ? "✅ Login successful!" : "🎉 Account created successfully!");

      // navigate
      navigate("/home");
    } catch (err: any) {
      console.error(err);

      const errorMsg =
        err.response?.data?.error || err.response?.data?.message;

      if (errorMsg === "User not found") {
        toast.error("❌ You don’t have an account. Please sign up first!");
      } else if (errorMsg === "User already exists") {
        toast.info("⚠️ You already have an account. Please login!");
      } else if (errorMsg === "Invalid credentials") {
        toast.error("🔑 Wrong password. Try again!");
      } else {
        toast.error(errorMsg || "Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700"
      >
        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="text-indigo-400" size={28} />
          <h2 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-2 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl font-medium shadow-lg transition"
          >
            {isLoading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
            <ArrowRight size={18} />
          </motion.button>
        </form>

        {/* Toggle */}
        <p className="text-gray-400 text-center mt-6">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-400 hover:underline"
          >
            {isLogin ? "Create one" : "Login here"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;

