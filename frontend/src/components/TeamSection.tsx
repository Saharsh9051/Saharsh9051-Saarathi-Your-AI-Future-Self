import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Mail, User } from 'lucide-react';

const TeamSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: 'Saharsh Sharma',
      role: 'Data Science Lead',
      description: 'AI algorithms and machine learning model architect behind the Saarathi Engine.',
      image: '/WhatsApp Image 2025-08-19 at 19.53.49_130a8efc.jpg',
      gradient: 'from-cyber-blue to-blue-500',
      social: { github: '#', linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Vishal Kumar Roy',
      role: 'Backend Engineer',
      description: 'Scalable infrastructure and API development for seamless user experience.',
      image: '',
      gradient: 'from-cyber-purple to-purple-600',
      social: { github: '#', linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Samiksha Kumari',
      role: 'Frontend Dev & UI/UX',
      description: 'Beautiful interfaces and smooth user interactions that bring Saarathi to life.',
      image: '/WhatsApp Image 2025-08-19 at 19.51.14_5f2c7573.jpg',
      gradient: 'from-neon-green to-green-500',
      social: { github: '#', linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Bhumi Sharma',
      role: 'UI/UX Designer',
      description: 'Creative vision and design systems that make complex AI interactions intuitive.',
      image: '/WhatsApp Image 2025-08-19 at 19.59.19_c77a995b.jpg',
      gradient: 'from-pink-500 to-rose-500',
      social: { github: '#', linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Shubham Mishra',
      role: 'Cloud & Integration',
      description: 'DevOps and cloud architecture ensuring reliable, scalable deployment.',
      image: '/WhatsApp Image 2025-08-19 at 20.00.01_3112b1d8.jpg',
      gradient: 'from-indigo-500 to-purple-600',
      social: { github: '#', linkedin: '#', twitter: '#', email: '#' }
    },
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/5 to-blue-900/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient font-space">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind Saarathi, united by a mission to revolutionize AI-powered mentorship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              className="group relative"
            >
              <div className="glass-morphism rounded-3xl p-6 h-full relative overflow-hidden card-hover">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
                
                {/* Profile image */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  {member.image ? (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-48 object-cover rounded-2xl shadow-xl"
                    />
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`relative w-full h-48 bg-gradient-to-r ${member.gradient} rounded-2xl shadow-xl flex items-center justify-center`}
                    >
                      <User size={64} className="text-white" />
                    </motion.div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.github}
                        className="w-8 h-8 glass-morphism rounded-full flex items-center justify-center"
                      >
                        <Github size={16} className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        href={member.social.linkedin}
                        className="w-8 h-8 glass-morphism rounded-full flex items-center justify-center"
                      >
                        <Linkedin size={16} className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href={member.social.twitter}
                        className="w-8 h-8 glass-morphism rounded-full flex items-center justify-center"
                      >
                        <Twitter size={16} className="text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        href={member.social.email}
                        className="w-8 h-8 glass-morphism rounded-full flex items-center justify-center"
                      >
                        <Mail size={16} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {member.name}
                  </h3>
                  <div className={`inline-block bg-gradient-to-r ${member.gradient} text-white text-sm px-3 py-1 rounded-full mb-4 font-medium`}>
                    {member.role}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-cyber rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-cyber rounded-full opacity-30 group-hover:opacity-100 transition-opacity delay-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-morphism p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who share our vision of democratizing success through AI.
            </p>
            <button className="bg-gradient-cyber text-white px-8 py-3 rounded-full font-semibold hover-scale">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;