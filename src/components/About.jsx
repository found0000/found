import React from 'react';
import aboutTree from '../assets/about-tree.png';

const About = () => {
  return (
    <section className="w-full bg-cream pt-16 md:pt-24 pb-24 md:pb-36 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        
        {/* Left Side: Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={aboutTree} 
            alt="Student sitting under a tree of knowledge" 
            className="w-full max-w-xl scale-110 md:scale-110 object-contain drop-shadow-sm"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-dark-teal">
          <div className="bg-primary-teal text-white rounded-xl md:rounded-2xl px-6 py-3 md:px-10 md:py-5 mb-6 md:mb-8 inline-block shadow-sm">
            <h2 className="text-2xl lg:text-4xl font-semibold tracking-[0.1em]">WHAT IS FOUND ?</h2>
          </div>
          <p className="text-sm md:text-base lg:text-xl font-regular leading-relaxed max-w-[320px] md:max-w-[470px] text-dark-teal/80 text-left">
            We believe the best opportunities on your campus shouldn't be hidden. That’s why we’re building a better way to discover campus-specific opportunities, learn from students who’ve been where you are, and navigate college with confidence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
