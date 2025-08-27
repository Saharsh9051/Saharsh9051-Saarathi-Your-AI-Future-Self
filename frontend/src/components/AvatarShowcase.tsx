import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Play, 
  Pause, 
  Volume2, 
  MessageCircle, 
  Sparkles, 
  Zap, 
  Star, 
  Heart,
  Brain,
  Target,
  Rocket,
  Globe
} from 'lucide-react';

const AvatarShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
  };

  // Floating particles around avatar
  const avatarParticles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
  }));

  return (
    <section ref={ref} className="section-padding career-universe relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="animated-bg" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-float-complex" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-neon-green via-cyber-blue to-cyber-purple opacity-10 rounded-full blur-3xl animate-morph" />
      
      {/* Constellation Background */}
      <div className="career-constellation opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8 relative"
          >
            <Sparkles size={72} className="text-cyber-blue" />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star size={24} className="absolute -top-3 -right-3 text-yellow-400" />
              <Heart size={20} className="absolute -bottom-2 -left-2 text-pink-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-8 text-gradient font-space relative"
          >
            Meet Your Future Self
            <motion.div
              className="absolute -top-6 -right-6 w-16 h-16"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <Globe className="w-full h-full text-neon-green opacity-70" />
            </motion.div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the revolutionary Aura Avatar - your AI-generated future self that provides 
            <motion.span 
              className="text-success-gradient font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {" "}personalized guidance with emotional connection across infinite career dimensions.
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Avatar Demo */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative transform-3d"
          >
            <div className="relative glass-card rounded-3xl p-10 overflow-hidden">
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {avatarParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-cyber opacity-30"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4 + particle.delay,
                      repeat: Infinity,
                      delay: particle.delay,
                    }}
                  />
                ))}
              </div>

              {/* Avatar Container */}
              <div className="relative aspect-square bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-neon-green/20 rounded-3xl flex items-center justify-center overflow-hidden">
                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-60"
                  style={{
                    background: 'conic-gradient(from 0deg, #00D4FF, #8B5CF6, #10B981, #00D4FF)',
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Border */}
                <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl" />
                
                {/* Avatar Content */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                  <motion.div
                    animate={isPlaying ? { 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative w-40 h-40 bg-gradient-cyber rounded-full flex items-center justify-center mb-6 shadow-2xl"
                  >
                    {/* Avatar Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 30px rgba(0, 212, 255, 0.5)',
                          '0 0 60px rgba(139, 92, 246, 0.7)',
                          '0 0 30px rgba(0, 212, 255, 0.5)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <Sparkles size={64} className="text-white drop-shadow-lg" />
                    
                    {/* Orbiting Elements */}
                    {[Brain, Target, Rocket].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-8 h-8 bg-gradient-cyber rounded-full flex items-center justify-center"
                        style={{
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          rotate: [0, 360],
                          x: Math.cos((i * 120) * Math.PI / 180) * 80,
                          y: Math.sin((i * 120) * Math.PI / 180) * 80,
                        }}
                        transition={{
                          duration: 6 + i,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon size={16} className="text-white" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <div className="text-center mb-6">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      Your Future Self
                    </motion.h3>
                    <p className="text-gray-300">Ready to guide you to success</p>
                  </div>

                  {/* Audio Visualization */}
                  {isPlaying && (
                    <motion.div 
                      className="flex items-center space-x-2 mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      {[...Array(7)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 bg-gradient-cyber rounded-full"
                          animate={{ height: [8, 32, 8] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Enhanced Controls */}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlayDemo}
                  className="bg-gradient-cyber text-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl glow relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </motion.button>
                
                {[Volume2, MessageCircle].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
                    className="glass-morphism text-white w-16 h-16 rounded-full flex items-center justify-center hover-scale"
                  >
                    <Icon size={24} />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-8 -right-8 glass-morphism p-6 rounded-3xl"
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-gradient mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  98.5%
                </motion.div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </motion.div>

            {/* Additional Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-8 -left-8 glass-morphism p-4 rounded-2xl"
            >
              <div className="flex items-center space-x-2">
                <Zap size={20} className="text-neon-green" />
                <span className="text-white font-semibold">Live</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Features */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-10"
          >
            {[
              {
                title: 'Realistic AI Generation',
                description: 'Advanced AI creates a lifelike version of your future successful self with natural speech and expressions across infinite career possibilities.',
                icon: '🎭',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Emotional Connection',
                description: 'Experience genuine motivation from someone who understands your journey because they are you from a successful parallel universe.',
                icon: '💫',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Personalized Wisdom',
                description: 'Receive guidance tailored to your personality, goals, and current challenges from across the career multiverse.',
                icon: '🧠',
                gradient: 'from-green-500 to-teal-500',
              },
              {
                title: '24/7 Availability',
                description: 'Your future self is always there when you need encouragement or strategic advice, transcending time and space.',
                icon: '⏰',
                gradient: 'from-orange-500 to-red-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  x: 15,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
                className="flex items-start space-x-6 glass-morphism p-8 rounded-3xl card-hover relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                <motion.div 
                  className="text-5xl relative z-10"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                <div className="relative z-10">
                  <motion.h4 
                    className="text-2xl font-bold text-white mb-3 hover:text-gradient transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-gradient-cyber rounded-full opacity-50"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-cyber text-white py-6 rounded-3xl font-bold text-xl shadow-2xl glow relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <Rocket size={24} />
                <span>Create Your Avatar</span>
                <Star size={24} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvatarShowcase;