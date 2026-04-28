

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PortfolioHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/', id: 'home' },
    { name: 'Projects', to: '/projects', id: 'projects' },
    { name: 'Services', to: '/services', id: 'services' },
    { name: 'About', to: '/about', id: 'about' }
  ];

  return (
    <header className="w-full bg-gradient-to-b from-black via-gray-900 to-red-900 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">SKD</div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.id}
                to={link.to}
                className={`transition-colors duration-200 ${
                  currentPath === link.to
                    ? 'text-white border-b-2 border-white pb-1 font-medium'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                currentPath === '/contact'
                  ? 'bg-red-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="bg-gray-900 py-4 mt-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.id}
                to={link.to}
                className={`transition-colors duration-200 ${
                  currentPath === link.to
                    ? 'text-white border-b-2 border-white pb-1 font-medium'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                currentPath === '/contact'
                  ? 'bg-red-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <hr className="border-gray-800 mt-4 border-1" />
    </header>
  );
};

export default PortfolioHeader;