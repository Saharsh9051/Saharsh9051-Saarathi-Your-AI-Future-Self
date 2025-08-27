import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@saarathi.ai',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 98765 43210',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Bangalore, India',
      description: 'Come and say hello',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-dark-bg via-blue-900/10 to-purple-900/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyber-purple/10 rounded-full blur-3xl animate-bounce-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient font-space">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about Saarathi? Want to join our beta program? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass-morphism p-6 rounded-3xl card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-cyber rounded-2xl flex items-center justify-center shadow-xl">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-cyber-blue font-semibold mb-2">{item.value}</p>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-gradient-cyber text-white py-4 rounded-2xl font-semibold text-lg shadow-xl glow flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Start Live Chat</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full glass-morphism text-white py-4 rounded-2xl font-semibold hover-scale flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Schedule a Call</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass-morphism p-8 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyber-blue transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-cyber text-white py-4 rounded-2xl font-semibold text-lg shadow-xl glow flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-morphism p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-gray-300">
              Expect a response within <span className="text-cyber-blue font-semibold">24 hours</span>. 
              For urgent matters, use our live chat or call us directly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;