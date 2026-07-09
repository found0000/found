import React from 'react';
// import heroText from '../assets/hero-found-text.svg'; 
import mapPin from '../assets/map-pin.svg';
import networkMap from '../assets/network-map.png';
import networkMapMobile from '../assets/network-map-mobile.png';
import starburstButton from '../assets/starburst-button.svg';

const Hero = () => {
  return (
    <section className="relative w-full bg-cream flex items-center justify-center overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
      
      <div className="w-full max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 z-10">
        
        {/* Left Column: Map & Button */}
        <div className="w-full md:w-[55%] lg:w-[60%] relative flex justify-center items-center">
          
          {/* Mobile Map Image */}
          <img 
            src={networkMapMobile} 
            alt="Network of opportunities" 
            className="w-full h-auto object-cover rounded-2xl block md:hidden"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          
          {/* Desktop Map Image */}
          <img 
            src={networkMap} 
            alt="Network of opportunities" 
            className="w-full h-auto object-cover rounded-3xl hidden md:block"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-teal leading-tight tracking-tight">
            Your <span className="italic">personalized</span> guide to opportunities on campus
          </h1>
          <p className="text-base md:text-lg text-dark-teal/80 font-medium leading-relaxed max-w-lg">
            Found is an app that helps you discover the opportunities that match your interests, goals and ambitions - all in one place.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
