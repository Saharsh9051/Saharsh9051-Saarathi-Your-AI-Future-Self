import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  GraduationCap, 
  Brain, 
  User, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield,
  BookOpen,
  Award,
  Compass,
  Lightbulb,
  Rocket,
  Star,
  Globe,
  Heart
} from 'lucide-react';

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Calendar,
      title: 'Smart Career Planning',
      description: 'AI-powered roadmaps that adapt to your goals, from IIT JEE to dream careers in the multiverse.',
      gradient: 'from-blue-500 to-cyan-500',
      category: 'Planning',
      particles: 12,
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Personalized study plans for competitive exams with expert-curated cosmic resources.',
      gradient: 'from-purple-500 to-pink-500',
      category: 'Education',
      particles: 15,
    },
    {
      icon: Brain,
      title: 'Mental Wellness',
      description: 'Integrated mindfulness and stress management for peak performance across dimensions.',
      gradient: 'from-green-500 to-teal-500',
      category: 'Wellness',
      particles: 10,
    },
    {
      icon: User,
      title: 'Future Self Avatar',
      description: 'Your successful future self provides motivation through interactive conversations.',
      gradient: 'from-orange-500 to-red-500',
      category: 'Mentorship',
      particles: 18,
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Instant performance analysis and strategy adjustments for maximum efficiency.',
      gradient: 'from-yellow-500 to-orange-500',
      category: 'Performance',
      particles: 14,
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Strategic milestone tracking with predictive analytics for universal success.',
      gradient: 'from-indigo-500 to-purple-500',
      category: 'Success',
      particles: 16,
    },
    {
      icon: TrendingUp,
      title: 'Progress Analytics',
      description: 'Comprehensive insights into your growth patterns and achievements across realities.',
      gradient: 'from-teal-500 to-blue-500',
      category: 'Analytics',
      particles: 11,
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'End-to-end encryption ensures your personal data remains secure in all dimensions.',
      gradient: 'from-gray-500 to-slate-600',
      category: 'Security',
      particles: 8,
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Curated learning materials and practice tests from across the career multiverse.',
      gradient: 'from-emerald-500 to-green-600',
      category: 'Resources',
      particles: 13,
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Gamified learning with rewards and recognition for interdimensional milestones.',
      gradient: 'from-amber-500 to-yellow-600',
      category: 'Motivation',
      particles: 17,
    },
    {
      icon: Compass,
      title: 'Career Navigation',
      description: 'Explore 1000+ career paths with detailed roadmaps across infinite possibilities.',
      gradient: 'from-rose-500 to-pink-600',
      category: 'Exploration',
      particles: 20,
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Stay updated with latest trends and opportunities from parallel career universes.',
      gradient: 'from-violet-500 to-purple-600',
      category: 'Innovation',
      particles: 9,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="section-padding career-universe relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="animated-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-blue/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple/15 rounded-full blur-3xl animate-float-complex" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyber-blue via-cyber-purple to-neon-green opacity-10 rounded-full blur-3xl animate-morph" />
      
      {/* Floating Career Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute career-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, -15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-8 bg-gradient-cyber rounded-full opacity-30 blur-sm" />
        </motion.div>
      ))}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <Zap size={64} className="text-cyber-blue" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Star size={24} className="absolute -top-2 -right-2 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-10 text-gradient font-space relative"
          >
            Powerful Features
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Globe className="w-full h-full text-neon-green opacity-60" />
            </motion.div>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed"
          >
            Experience the next generation of AI-powered career mentorship with features designed to 
            <motion.span 
              className="text-success-gradient font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {" "}transform your journey across infinite career dimensions.
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 10,
                z: 100,
                transition: { duration: 0.3 }
              }}
              className="group relative transform-3d"
            >
              <div className="glass-card p-8 rounded-3xl card-hover h-full relative overflow-hidden">
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(feature.particles)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-30"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 right-4 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-cyber-blue backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.category}
                </motion.div>

                {/* Background Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700`} />
                
                {/* Icon Container */}
                <motion.div 
                  className={`relative w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-2xl`}
                  whileHover={{ 
                    rotate: [0, -15, 15, 0],
                    scale: 1.15,
                    transition: { duration: 0.6 }
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <feature.icon size={42} className="text-white drop-shadow-lg" />
                  
                  {/* Icon Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        `0 0 20px rgba(0, 212, 255, 0.3)`,
                        `0 0 40px rgba(139, 92, 246, 0.5)`,
                        `0 0 20px rgba(0, 212, 255, 0.3)`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    {feature.description}
                  </p>

                  {/* Interactive Learn More */}
                  <motion.div
                    className="flex items-center space-x-2 text-cyber-blue hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">Explore Feature</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Rocket size={16} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-cyber-purple/5 to-neon-green/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Interactive Elements */}
                <motion.div
                  className="absolute bottom-4 right-4 w-4 h-4 bg-gradient-cyber rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Corner Decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-gradient-cyber rounded-full opacity-20 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-neon-green rounded-full opacity-20 group-hover:opacity-60 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-24"
        >
          <div className="glass-card p-16 rounded-3xl max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-cyber opacity-10 animate-morph" />
            
            {/* Floating Elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-gradient-cyber rounded-full opacity-20"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}

            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-8 relative z-10"
            >
              <Target size={80} className="text-cyber-blue" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Heart size={24} className="absolute -top-2 -right-2 text-pink-400" />
              </motion.div>
            </motion.div>
            
            <h3 className="text-5xl font-bold text-white mb-8 relative z-10">Ready to Transform Your Future?</h3>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto relative z-10">
              Join thousands of students who are already using Saarathi to achieve their career dreams across infinite dimensions.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-cyber text-white px-16 py-6 rounded-full font-bold text-2xl shadow-2xl animate-pulse-glow relative z-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10">Explore All Features</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;