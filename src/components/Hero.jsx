import React from 'react';
// import heroText from '../assets/hero-found-text.svg'; 
import mapPin from '../assets/map-pin.svg';
import networkMap from '../assets/network-map.png';
import networkMapMobile from '../assets/network-map-mobile.png';
import starburstButton from '../assets/starburst-button.svg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-cream flex items-center justify-center overflow-hidden pt-28 pb-20">
      
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
          
          {/* Central Starburst Button positioned over the map - Commented out for now */}
          {/*
          <div className="absolute z-10 animate-float pointer-events-none">
            <button 
              className="hover:scale-105 transition-transform duration-300 flex items-center justify-center pointer-events-auto drop-shadow-2xl"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <img 
                src={starburstButton} 
                alt="" 
                className="w-40 h-40 md:w-48 md:h-48 drop-shadow-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.classList.add('bg-accent-coral', 'w-40', 'h-40', 'rounded-full');
                }}
              />
              
              <div className="absolute flex flex-col items-center justify-center text-white pointer-events-none gap-2 mt-3 md:mt-4">
                <span className="font-semibold text-base md:text-xl leading-tight uppercase text-center tracking-wide">
                  Join<br/>Waitlist
                </span>
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          </div>
          */}
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-teal leading-tight tracking-tight">
            Your <span className="italic">personalized</span> guide to opportunities on campus
          </h1>
          <p className="text-base md:text-lg text-dark-teal/80 font-medium leading-relaxed max-w-lg">
            Found helps you uncover the opportunities that match your interests, goals and ambitions - all in one place.
          </p>
        </div>

      </div>

      {/* Floating Map Pins (Decorative) - Commented out as requested */}
      {/* 
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 top-[16%] left-[8%] md:top-[12%] md:left-[8%] animate-twinkle" style={{ animationDelay: '-0.5s', animationDuration: '1.5s' }} />
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 top-[35%] left-[25%] md:top-[20%] md:left-[28%] animate-twinkle" style={{ animationDelay: '-2.1s', animationDuration: '3s' }} />
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 top-[22%] left-[45%] md:top-[15%] md:left-[50%] animate-twinkle" style={{ animationDelay: '-1.8s', animationDuration: '1.8s' }} />
      
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 top-[32%] right-[23%] md:top-[28%] md:right-[30%] animate-twinkle" style={{ animationDelay: '-3.4s', animationDuration: '2.5s' }} />
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 top-[18%] right-[10%] md:top-[15%] md:right-[12%] animate-twinkle" style={{ animationDelay: '-0.9s', animationDuration: '3.1s' }} />
      
      <img src={mapPin} alt="" className="hidden lg:block absolute w-8 h-8 md:w-10 md:h-10 top-[46%] left-[2%] md:top-[45%] md:left-[4%] animate-twinkle" style={{ animationDelay: '-4.2s', animationDuration: '2.2s' }} />
      <img src={mapPin} alt="" className="hidden lg:block absolute w-8 h-8 md:w-10 md:h-10 bottom-[48%] right-[2%] md:bottom-[50%] md:right-[4%] animate-twinkle" style={{ animationDelay: '-1.5s', animationDuration: '3s' }} />
      
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 bottom-[15%] left-[8%] md:bottom-[8%] md:left-[8%] animate-twinkle" style={{ animationDelay: '-2.8s', animationDuration: '3.5s' }} />
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 bottom-[26%] left-[25%] md:bottom-[5%] md:left-[30%] animate-twinkle" style={{ animationDelay: '-0.3s', animationDuration: '2.4s' }} />
      
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 bottom-[28%] right-[40%] md:bottom-[11%] md:right-[48%] animate-twinkle" style={{ animationDelay: '-5.1s', animationDuration: '4s' }} />
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 bottom-[12%] right-[25%] md:bottom-[4%] md:right-[28%] animate-twinkle" style={{ animationDelay: '-3.9s', animationDuration: '3.2s' }} />
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-10 md:h-10 bottom-[20%] right-[10%] md:bottom-[14%] md:right-[5%] animate-twinkle" style={{ animationDelay: '-1.1s', animationDuration: '2.1s' }} />
      */}
    </section>
  );
};

export default Hero;
