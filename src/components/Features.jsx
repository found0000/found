import React from 'react';
import studentLaptop from '../assets/student-laptop.png';

const Features = () => {
  return (
    <section className="w-full bg-cream py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Main Top Card */}
        <div className="bg-accent-coral/[.11] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left side Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img 
              src={studentLaptop} 
              alt="Student using a laptop" 
              className="w-full h-auto object-cover rounded-[2rem] md:rounded-[2.5rem]"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          
          {/* Right side Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-teal mb-6 tracking-wide leading-tight">
              EVERYTHING YOU NEED<br className="hidden lg:block"/> TO MOVE FORWARD
            </h2>
            <p className="text-dark-teal/80 font-regular text-[15px] md:text-base leading-relaxed text-justify">
              Found brings together personalized opportunities, proven student pathways, and meaningful connections in one place. Discover internships, research, scholarships, campus organizations, and mentors tailored to your interests—so you always know what to do next.
            </p>
          </div>
        </div>

        {/* Bottom 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
          
          <div className="bg-accent-coral/[.11] rounded-[2rem] p-8 md:p-6 lg:p-10 hover:bg-accent-coral/[.15] transition-colors duration-300">
            <h3 className="text-xl font-bold text-dark-teal mb-4">Discover</h3>
            <p className="text-dark-teal/80 font-regular text-[15px] leading-relaxed">
              Find opportunities on campus you didn't know existed
            </p>
          </div>

          <div className="bg-accent-coral/[.11] rounded-[2rem] p-8 md:p-6 lg:p-10 hover:bg-accent-coral/[.15] transition-colors duration-300">
            <h3 className="text-xl font-bold text-dark-teal mb-4">People</h3>
            <p className="text-dark-teal/80 font-regular text-[15px] leading-relaxed">
              Connect with students, alumni and peers who have walked similar paths
            </p>
          </div>

          <div className="bg-accent-coral/[.11] rounded-[2rem] p-8 md:p-6 lg:p-10 hover:bg-accent-coral/[.15] transition-colors duration-300">
            <h3 className="text-xl font-bold text-dark-teal mb-4">Pathways</h3>
            <p className="text-dark-teal/80 font-regular text-[15px] leading-relaxed">
              Explore different ways to get to your goals.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
