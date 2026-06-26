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
      {/* Floating Map Pins (Decorative) - 14 Pins */}
      {/* Scattered evenly across the top and bottom quarters, utilizing the full width above/below text */}
      
      {/* Top Left Area */}
      <img src={mapPin} alt="" className="absolute w-10 h-10 10:w-12 md:h-12 top-[16%] left-[8%] md:top-[12%] md:left-[8%] animate-fade-in-delayed [animation-delay:1000ms] rotate-[15deg]" />
      <img src={mapPin} alt="" className="absolute w-10 h-10 10:w-12 md:h-12 top-[35%] left-[25%] md:top-[20%] md:left-[28%] animate-fade-in-delayed [animation-delay:1200ms] -rotate-[10deg]" />
      <img src={mapPin} alt="" className="absolute w-10 h-10 10:w-12 md:h-12 top-[22%] left-[45%] md:top-[15%] md:left-[50%] animate-fade-in-delayed [animation-delay:1400ms] rotate-[5deg]" />
      
      {/* Top Right Area */}
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-12 md:h-12 top-[32%] right-[23%] md:top-[28%] md:right-[30%] animate-fade-in-delayed [animation-delay:1800ms] -rotate-[25deg]" />
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-12 md:h-12 top-[18%] right-[10%] md:top-[15%] md:right-[12%] animate-fade-in-delayed [animation-delay:2000ms] rotate-[20deg]" />
      
      {/* Far Edges (Middle) */}
      <img src={mapPin} alt="" className="hidden lg:block absolute w-10 h-10 md:w-12 md:h-12 top-[46%] left-[2%] md:top-[45%] md:left-[4%] animate-fade-in-delayed [animation-delay:2200ms] -rotate-[15deg]" />
      <img src={mapPin} alt="" className="hidden lg:block absolute w-10 h-10 md:w-12 md:h-12 bottom-[48%] right-[2%] md:bottom-[50%] md:right-[4%] animate-fade-in-delayed [animation-delay:2400ms] rotate-[35deg]" />
      
      {/* Bottom Left Area */}
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-12 md:h-12 bottom-[15%] left-[8%] md:bottom-[8%] md:left-[8%] animate-fade-in-delayed [animation-delay:2600ms] -rotate-[8deg]" />
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-12 md:h-12 bottom-[26%] left-[25%] md:bottom-[5%] md:left-[30%] animate-fade-in-delayed [animation-delay:3000ms] rotate-[12deg]" />
      
      {/* Bottom Right Area */}
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-12 md:h-12 bottom-[28%] right-[40%] md:bottom-[11%] md:right-[48%] animate-fade-in-delayed [animation-delay:3200ms] -rotate-[18deg]" />
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-12 md:h-12 bottom-[12%] right-[25%] md:bottom-[4%] md:right-[28%] animate-fade-in-delayed [animation-delay:3400ms] rotate-[22deg]" />
      <img src={mapPin} alt="" className="absolute w-10 h-10 md:w-12 md:h-12 bottom-[20%] right-[10%] md:bottom-[14%] md:right-[5%] animate-fade-in-delayed [animation-delay:3600ms] -rotate-[30deg]" />

    </section>
  );
};

export default Hero;
