import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'News', path: '/news' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-[#76EAD7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">CarbonX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#76EAD7]'
                    : 'text-[#94A3B8] hover:text-[#76EAD7]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="btn-primary"
            >
              Get Started
            </Link>
            <button
              className="btn-secondary"
              onClick={() => console.log('Connect wallet')}
            >
              Connect Wallet
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#94A3B8] hover:text-[#76EAD7]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E293B]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#94A3B8] hover:text-[#76EAD7]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#0F172A] bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D]"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#94A3B8] hover:text-[#76EAD7]"
              onClick={() => {
                console.log('Connect wallet');
                setIsMenuOpen(false);
              }}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 