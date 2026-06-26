import React from 'react';
import networkMap from '../assets/network-map.png';
import networkMapMobile from '../assets/network-map-mobile.jpeg';
import starburstButton from '../assets/starburst-button.svg';

const MapSection = () => {
  return (
    <section className="w-full bg-cream pb-16 pt-0 relative flex items-center justify-center min-h-[600px]">
      
      {/* Background Map Image */}
      <div className="w-full relative flex justify-center items-center">
        {/* Mobile Map Image */}
        <img 
          src={networkMapMobile} 
          alt="Network of opportunities" 
          className="w-full h-auto object-cover opacity-90 block md:hidden"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Desktop Map Image */}
        <img 
          src={networkMap} 
          alt="Network of opportunities" 
          className="w-full h-auto object-cover opacity-90 hidden md:block"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        {/* Central Starburst Button positioned over the map */}
        <button 
          className="absolute z-10 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <img 
            src={starburstButton} 
            alt="" 
            className="w-48 h-48 md:w-56 md:h-56 drop-shadow-xl"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.classList.add('bg-accent-coral', 'w-48', 'h-48', 'rounded-full');
            }}
          />
          
          {/* Overlay Text and Arrow */}
          <div className="absolute flex flex-col items-center justify-center text-white pointer-events-none gap-3 mt-4 md:mt-5">
            <span className="font-semibold text-lg md:text-2xl leading-tight uppercase text-center tracking-wide">
              Join<br/>Waitlist
            </span>
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
      </div>

    </section>
  );
};

export default MapSection;
