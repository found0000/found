import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-primary-teal bg-opacity-95 backdrop-blur-sm">
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
      
      <button 
        className="bg-white text-primary-teal px-6 py-2 rounded-full font-semibold text-sm hover:bg-cream transition-colors"
        onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
      >
        JOIN WAITLIST
      </button>
    </nav>
  );
};

export default Navbar;
