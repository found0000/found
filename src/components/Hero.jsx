import React from 'react';
import heroText from '../assets/hero-found-text.svg';
import mapPin from '../assets/map-pin.svg';

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[500px] bg-primary-teal flex items-center justify-center overflow-hidden pt-16">
      
      {/* Central Hero Text */}
      <div className="relative z-10 w-full max-w-[90vw] md:max-w-7xl px-4 flex justify-center">
        <img 
          src={heroText} 
          alt="Found" 
          className="w-full max-w-[85vw] md:max-w-6xl h-auto drop-shadow-2xl"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <h1 className="hidden text-white font-extrabold text-7xl md:text-9xl tracking-tight text-center w-full">Found</h1>
      </div>

      {/* Floating Map Pins (Decorative) */}
      {/* We use inline styles or tailwind arbitrary values for positioning these exactly as in the design */}
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-14 md:h-14 top-[15%] left-[5%] md:left-[10%] animate-fade-in-delayed [animation-delay:1000ms]" />
      <img src={mapPin} alt="" className="absolute w-6 h-6 md:w-12 md:h-12 top-[10%] md:top-[15%] right-[15%] md:right-[20%] animate-fade-in-delayed [animation-delay:1200ms]" />
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-16 md:h-16 bottom-[5%] md:bottom-[8%] left-[2%] md:left-[5%] animate-fade-in-delayed [animation-delay:1400ms]" />
      <img src={mapPin} alt="" className="absolute w-8 h-8 md:w-14 md:h-14 bottom-[8%] md:bottom-[10%] right-[2%] md:right-[5%] animate-fade-in-delayed [animation-delay:1600ms]" />

    </section>
  );
};

export default Hero;
