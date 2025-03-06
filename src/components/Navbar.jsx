import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'News', path: '/news' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full px-4 sm:px-6 lg:px-8 top-0 left-0 z-50 ${
        scrolled 
          ? 'py-2'
          : 'py-4'
      } transition-all duration-300 ease-in-out`}
    >
      <div className={`mx-auto max-w-7xl relative ${
        scrolled 
          ? 'bg-[#0F172A]/60 shadow-lg shadow-[#76EAD7]/5 border border-[#76EAD7]/10'
          : 'bg-[#0F172A]/40 border border-white/5'
      } backdrop-blur-xl rounded-2xl transition-all duration-300`}>
        <div className="flex justify-between items-center h-20 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl font-bold gradient-text"
              style={{
                textShadow: '0 0 10px rgba(118, 234, 215, 0.5), 0 0 20px rgba(196, 251, 109, 0.3)',
                filter: 'drop-shadow(0 0 8px rgba(118, 234, 215, 0.4))'
              }}
            >
              carbonX
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(118, 234, 215, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm md:text-base font-medium transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-[#76EAD7] icon-glow'
                      : 'text-[#94A3B8] hover:text-[#76EAD7]'
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D]"
                      initial={false}
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(118, 234, 215, 0.5))"
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <div className="h-6 w-px bg-gradient-to-b from-[#76EAD7]/20 to-[#C4FB6D]/20" /> {/* Gradient Divider */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to="/dashboard"
                className="px-6 py-2.5 text-base font-medium text-[#0F172A] bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] rounded-lg 
                hover:shadow-[0_0_20px_rgba(118,234,215,0.3)] transition-all duration-300 shadow-lg shadow-[#76EAD7]/10"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#94A3B8] hover:text-[#76EAD7] p-2 focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0F172A]/95 backdrop-blur-lg border-b border-[#1E293B]"
            >
              <div className="px-4 pt-2 pb-4 space-y-3">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={link.path}
                      className="block py-2 text-[#94A3B8] hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 space-y-3">
                  <Link
                    to="/dashboard"
                    className="block w-full btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 