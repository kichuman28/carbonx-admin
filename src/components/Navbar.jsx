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
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold gradient-text"
            >
              carbonX
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 relative ${
                    location.pathname === link.path
                      ? 'text-[#76EAD7]'
                      : 'text-[#94A3B8] hover:text-[#76EAD7]'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D]"
                      initial={false}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <div className="h-6 w-px bg-white/10" /> {/* Divider */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to="/dashboard"
                className="px-4 py-2 text-sm font-medium text-[#0F172A] bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#76EAD7]/10"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#94A3B8] hover:text-white p-2 focus:outline-none"
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
            </button>
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