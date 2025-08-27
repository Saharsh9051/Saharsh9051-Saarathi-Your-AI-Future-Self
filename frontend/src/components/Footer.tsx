import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-dark-bg via-purple-900/20 to-blue-900/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-cyber-blue" />
              <span className="text-2xl font-bold text-gradient font-space">Saarathi</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your AI Future Self - A revolutionary digital mentor that combines strategic planning 
              with personal connection to guide you towards your ambitious goals.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-cyber-blue/20 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-cyber-blue/20 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-cyber-blue/20 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center hover:bg-cyber-blue/20 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">Home</a>
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">Features</a>
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">Dashboard</a>
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">About</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">Help Center</a>
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">Terms of Service</a>
              <a href="#" className="block text-gray-300 hover:text-cyber-blue transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Saarathi. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 mx-1" />
            <span>by Team Saarathi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;