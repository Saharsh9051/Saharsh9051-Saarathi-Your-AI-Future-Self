import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Play, 
  ArrowRight, 
  Zap, 
  GraduationCap, 
  Target, 
  Brain, 
  Rocket,
  BookOpen,
  Trophy,
  Users,
  TrendingUp,
  Star,
  Compass
} from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Career-related floating elements with enhanced animations
  const careerElements = [
    { icon: GraduationCap, x: 10, y: 20, size: 45, delay: 0, color: 'from-blue-500 to-cyan-500' },
    { icon: Target, x: 85, y: 15, size: 40, delay: 1, color: 'from-purple-500 to-pink-500' },
    { icon: Brain, x: 15, y: 70, size: 50, delay: 2, color: 'from-green-500 to-teal-500' },
    { icon: Rocket, x: 80, y: 75, size: 42, delay: 3, color: 'from-orange-500 to-red-500' },
    { icon: BookOpen, x: 50, y: 10, size: 35, delay: 4, color: 'from-indigo-500 to-purple-500' },
    { icon: Trophy, x: 20, y: 45, size: 38, delay: 5, color: 'from-yellow-500 to-orange-500' },
    { icon: Users, x: 75, y: 45, size: 40, delay: 6, color: 'from-teal-500 to-blue-500' },
    { icon: TrendingUp, x: 45, y: 80, size: 36, delay: 7, color: 'from-pink-500 to-rose-500' },
  ];

  // Enhanced particle system
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 3,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 6,
  }));

  // Career constellation points
  const constellationPoints = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center career-universe overflow-hidden">
      {/* Animated Background Layers */}
      <div className="animated-bg" />
      <div className="parallax-layer parallax-bg" />
      
      {/* Career Constellation */}
      <div className="career-constellation" />
      
      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(0, 212, 255, 0.8) 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Constellation Connection Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {constellationPoints.map((point) => (
          <motion.div
            key={point.id}
            className="absolute"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: point.delay,
            }}
          >
            <div 
              className="rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
              style={{
                width: `${point.size}px`,
                height: `${point.size}px`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Career Planets */}
      <div className="career-planet w-32 h-32 top-20 left-20" style={{ animationDelay: '0s' }} />
      <div className="career-planet w-24 h-24 bottom-32 right-32" style={{ animationDelay: '-10s' }} />
      <div className="career-planet w-20 h-20 top-1/2 right-20" style={{ animationDelay: '-5s' }} />

      {/* Career Elements with Enhanced Animations */}
      {careerElements.map((element, index) => (
        <motion.div
          key={index}
          className="career-float absolute z-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -10, 0],
            rotate: [0, 10, -5, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 8 + element.delay,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.5,
            rotate: 15,
            transition: { duration: 0.3 }
          }}
        >
          <div className={`glass-morphism p-6 rounded-3xl animate-pulse-glow bg-gradient-to-r ${element.color} bg-opacity-20`}>
            <element.icon size={element.size} className="text-white drop-shadow-lg" />
          </div>
        </motion.div>
      ))}

      {/* Mouse Follow Gradient */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, rgba(139, 92, 246, 0.15) 30%, rgba(16, 185, 129, 0.1) 60%, transparent 80%)',
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-3 glass-morphism px-10 py-5 rounded-full mb-8 animate-pulse-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-cyber opacity-20 animate-morph" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-cyber-blue" />
            </motion.div>
            <span className="text-xl font-bold text-career-gradient relative z-10">Your AI Career Universe</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-neon-green" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading with Enhanced Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-black mb-12 font-space leading-tight relative"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-gradient block"
          >
            Shape Your
          </motion.span>
          <motion.span 
            className="text-success-gradient block relative"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Dream Career
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-full h-full text-yellow-400 opacity-80" />
            </motion.div>
          </motion.span>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-6xl mx-auto leading-relaxed relative"
        >
          Transform your aspirations into achievements with personalized AI guidance from your 
          <motion.span 
            className="text-success-gradient font-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {" "}AI-powered future self.
          </motion.span>
          <br />
          <span className="text-career-gradient font-semibold">Your success story starts here, guided by tomorrow's you.</span>
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(0, 212, 255, 0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-cyber text-white px-16 py-6 rounded-full font-bold text-2xl shadow-2xl animate-pulse-glow flex items-center space-x-4 transform-3d relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
            <Rocket className="w-8 h-8" />
            <span>Launch Journey</span>
            <ArrowRight className="w-8 h-8" />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            className="glass-morphism text-white px-16 py-6 rounded-full font-bold text-2xl hover-scale flex items-center space-x-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-cyber opacity-0 hover:opacity-20 transition-opacity duration-300" />
            <Play className="w-8 h-8" />
            <span>Experience Demo</span>
          </motion.button>
        </motion.div>

        {/* Enhanced 3D Career Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="relative"
        >
          <div className="glass-card p-12 rounded-3xl max-w-6xl mx-auto transform-3d relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-cyber opacity-10 animate-morph" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { 
                  title: 'IIT Success Rate', 
                  value: '98.5%', 
                  icon: GraduationCap, 
                  color: 'from-blue-500 to-cyan-500',
                  description: 'Students Achieving Goals',
                  metric: '+2.3k'
                },
                { 
                  title: 'Career Paths', 
                  value: '1000+', 
                  icon: Compass, 
                  color: 'from-purple-500 to-pink-500',
                  description: 'Explored & Mapped',
                  metric: 'Daily'
                },
                { 
                  title: 'AI Mentorship', 
                  value: '24/7', 
                  icon: Brain, 
                  color: 'from-green-500 to-teal-500',
                  description: 'Always Available',
                  metric: 'Instant'
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.15, 
                    rotateY: 15,
                    z: 100
                  }}
                  className="card-hover glass-morphism p-8 rounded-3xl text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 hover:opacity-20 transition-opacity duration-500`} />
                  
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <stat.icon size={40} className="text-white" />
                  </motion.div>
                  
                  <div className="text-5xl font-black text-gradient mb-3">{stat.value}</div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.title}</div>
                  <div className="text-gray-300 mb-2">{stat.description}</div>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Action Elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${16 + i * 4} h-${16 + i * 4} bg-gradient-to-r from-cyber-blue via-cyber-purple to-neon-green rounded-full blur-2xl opacity-30`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, 40, -20, 0],
                scale: [1, 1.5, 0.8, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;