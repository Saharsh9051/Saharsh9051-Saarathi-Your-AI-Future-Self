import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, User, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      id: '01',
      icon: Settings,
      title: 'Saarathi Engine Builds Roadmap',
      description: 'Our AI analyzes your goals, current level, and preferences to create a personalized strategic roadmap.',
      color: 'cyber-blue',
    },
    {
      id: '02',
      icon: User,
      title: 'Future Self Avatar Delivers Plan',
      description: 'Your AI-generated future self avatar presents daily plans with encouragement and wisdom.',
      color: 'cyber-purple',
    },
    {
      id: '03',
      icon: TrendingUp,
      title: 'Adapt & Track Progress',
      description: 'Continuously optimize your journey with real-time feedback and adaptive planning.',
      color: 'neon-green',
    },
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyber-blue/5 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient font-space">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three simple steps to unlock your potential and achieve your dreams with AI-powered guidance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue via-cyber-purple to-neon-green opacity-30 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="relative group"
              >
                {/* Step number */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r ${
                    step.color === 'cyber-blue' ? 'from-cyber-blue to-blue-500' :
                    step.color === 'cyber-purple' ? 'from-cyber-purple to-purple-600' :
                    'from-neon-green to-green-500'
                  } rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-2xl z-10`}
                >
                  {step.id}
                </motion.div>

                {/* Card */}
                <div className="glass-morphism p-8 rounded-3xl card-hover h-full relative overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    step.color === 'cyber-blue' ? 'from-cyber-blue/5 to-transparent' :
                    step.color === 'cyber-purple' ? 'from-cyber-purple/5 to-transparent' :
                    'from-neon-green/5 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${
                    step.color === 'cyber-blue' ? 'from-cyber-blue to-blue-500' :
                    step.color === 'cyber-purple' ? 'from-cyber-purple to-purple-600' :
                    'from-neon-green to-green-500'
                  } rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <step.icon size={40} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Learn more link */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`inline-flex items-center space-x-2 text-${step.color} hover:text-white transition-colors cursor-pointer`}
                    >
                      <span className="font-medium">Learn More</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>

                {/* Connection arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <ArrowRight size={24} className="text-cyber-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-cyber text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl glow hover-scale">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;