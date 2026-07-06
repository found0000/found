import React, { useState } from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 bg-primary-teal bg-opacity-95 backdrop-blur-sm">
      <div className="flex justify-between items-center w-full relative">
        <div className="flex items-center">
          {/* We use an img tag with the SVG imported. Fallback text if missing */}
          <img 
            src={logo} 
            alt="Found Logo" 
            className="h-8 w-auto text-white object-contain" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="hidden text-white font-bold text-xl">found</span>
        </div>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            className="bg-white text-accent-coral px-6 py-2 rounded-full font-semibold text-sm hover:bg-cream transition-colors"
            onClick={() => handleScroll('about')}
          >
            ABOUT US
          </button>
          <button 
            className="bg-white text-accent-coral px-6 py-2 rounded-full font-semibold text-sm hover:bg-cream transition-colors"
            onClick={() => handleScroll('how-it-works')}
          >
            HOW IT WORKS
          </button>
          <button 
            className="bg-accent-coral text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-white hover:text-accent-coral transition-colors"
            onClick={() => handleScroll('waitlist-form')}
          >
            JOIN WAITLIST
          </button>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            className="bg-accent-coral text-white px-4 py-2 rounded-full font-semibold text-xs hover:bg-white hover:text-accent-coral transition-colors"
            onClick={() => handleScroll('waitlist-form')}
          >
            JOIN WAITLIST
          </button>
          <button 
            className="text-white p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-teal border-t border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl">
          <button 
            className="bg-white text-accent-coral px-6 py-3 rounded-full font-semibold text-sm w-full transition-colors shadow-sm"
            onClick={() => handleScroll('about')}
          >
            ABOUT US
          </button>
          <button 
            className="bg-white text-accent-coral px-6 py-3 rounded-full font-semibold text-sm w-full transition-colors shadow-sm"
            onClick={() => handleScroll('how-it-works')}
          >
            HOW IT WORKS
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
