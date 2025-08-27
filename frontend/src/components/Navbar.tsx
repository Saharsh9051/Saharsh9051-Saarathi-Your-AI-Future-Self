// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Sparkles } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? 'glass-morphism shadow-xl' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <Sparkles className="w-8 h-8 text-cyber-blue" />
//             <span className="text-xl font-bold text-gradient font-space">Saarathi</span>
//           </Link>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-white hover:text-cyber-blue transition-colors">Home</Link>
//             <Link to="/features" className="text-white hover:text-cyber-blue transition-colors">Features</Link>
//             <Link to="/about" className="text-white hover:text-cyber-blue transition-colors">About</Link>
//             <Link to="/contact" className="text-white hover:text-cyber-blue transition-colors">Contact</Link>
//             <Link to="/login" className="bg-gradient-cyber text-white px-6 py-2 rounded-full hover-scale">
//               Get Started
//             </Link>
//           </div>

//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <motion.div
//         initial={false}
//         animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
//         className="md:hidden glass-morphism overflow-hidden"
//       >
//         <div className="px-4 py-4 space-y-2">
//           <Link to="/" className="block text-white hover:text-cyber-blue py-2">Home</Link>
//           <Link to="/features" className="block text-white hover:text-cyber-blue py-2">Features</Link>
//           <Link to="/about" className="block text-white hover:text-cyber-blue py-2">About</Link>
//           <Link to="/contact" className="block text-white hover:text-cyber-blue py-2">Contact</Link>
//           <Link to="/login" className="block bg-gradient-cyber text-white px-4 py-2 rounded-full text-center">
//             Get Started
//           </Link>
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Sparkles } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // 🔑 Token check
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // ✅ Agar login hai to navbar hi return mat karo
//   // if (token) {
//   //   return null;
//   // }

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? 'glass-morphism shadow-xl' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2">
//             <Sparkles className="w-8 h-8 text-cyber-blue" />
//             <span className="text-xl font-bold text-gradient font-space">Saarathi</span>
//           </Link>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-white hover:text-cyber-blue transition-colors">Home</Link>
//             <Link to="/features" className="text-white hover:text-cyber-blue transition-colors">Features</Link>
//             <Link to="/about" className="text-white hover:text-cyber-blue transition-colors">About</Link>
//             <Link to="/contact" className="text-white hover:text-cyber-blue transition-colors">Contact</Link>
//             <Link to="/login" className="bg-gradient-cyber text-white px-6 py-2 rounded-full hover-scale">
//               Get Started
//             </Link>
//           </div>

//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <motion.div
//         initial={false}
//         animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
//         className="md:hidden glass-morphism overflow-hidden"
//       >
//         <div className="px-4 py-4 space-y-2">
//           <Link to="/" className="block text-white hover:text-cyber-blue py-2">Home</Link>
//           <Link to="/features" className="block text-white hover:text-cyber-blue py-2">Features</Link>
//           <Link to="/about" className="block text-white hover:text-cyber-blue py-2">About</Link>
//           <Link to="/contact" className="block text-white hover:text-cyber-blue py-2">Contact</Link>
//           <Link to="/login" className="block bg-gradient-cyber text-white px-4 py-2 rounded-full text-center">
//             Get Started
//           </Link>
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation(); // ✅ current route
  const token = localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Navbar only on landing page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-cyber-blue" />
            <span className="text-xl font-bold text-gradient font-space">Saarathi</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyber-blue transition-colors">Home</Link>
            <Link to="/features" className="text-white hover:text-cyber-blue transition-colors">Features</Link>
            <Link to="/about" className="text-white hover:text-cyber-blue transition-colors">About</Link>
            <Link to="/contact" className="text-white hover:text-cyber-blue transition-colors">Contact</Link>
            <Link to="/login" className="bg-gradient-cyber text-white px-6 py-2 rounded-full hover-scale">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        className="md:hidden glass-morphism overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2">
          <Link to="/" className="block text-white hover:text-cyber-blue py-2">Home</Link>
          <Link to="/features" className="block text-white hover:text-cyber-blue py-2">Features</Link>
          <Link to="/about" className="block text-white hover:text-cyber-blue py-2">About</Link>
          <Link to="/contact" className="block text-white hover:text-cyber-blue py-2">Contact</Link>
          <Link to="/login" className="block bg-gradient-cyber text-white px-4 py-2 rounded-full text-center">
            Get Started
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
