import React from 'react';
import step1 from '../assets/step-1.png';
import step2 from '../assets/step-2.png';
import step3 from '../assets/step-3.png';
import step4 from '../assets/step-4.png';

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Tell Us about yourself', desc: 'Choose your major, interests and goals', img: step1 },
    { num: '02', title: 'Discover Opportunities', desc: 'Get personalized recommendations for research, scholarships, events, clubs and more', img: step2 },
    { num: '03', title: 'Explore pathways', desc: 'See the milestones and experiences students took to reach similar goals', img: step3 },
    { num: '04', title: 'Take your next step', desc: 'Apply, connect and pursue opportunities that move you forward.', img: step4 },
  ];

  return (
    <section className="w-full bg-cream pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-bold text-center text-dark-teal mb-20 tracking-wider">
          HOW FOUND WORKS
        </h2>

        {/* Desktop Row / Tablet Grid / Mobile Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row items-center md:items-stretch lg:items-stretch justify-items-center justify-center gap-10 md:gap-8 lg:gap-4 xl:gap-6 w-full pt-4 pl-4 md:pt-4 md:pl-4 lg:pt-0 lg:pl-0">
          
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              
              {/* The Card */}
              <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[300px] lg:flex-1 mt-6 lg:mt-8">
                <div className="border-[1.5px] border-primary-teal/70 rounded-2xl p-6 lg:p-8 flex flex-col items-start text-left h-full relative bg-transparent">
                  
                  {/* Red Circle positioned precisely on the top-left corner */}
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-accent-coral rounded-full flex items-center justify-center text-white font-medium text-xl lg:text-2xl shadow-sm">
                    {step.num}
                  </div>

                  {/* Illustration */}
                  <div className="w-full flex justify-center mb-6 mt-4">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-32 md:h-40 object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="font-semibold text-lg md:text-xl text-dark-teal mb-3 leading-tight">{step.title}</h3>
                  <p className="text-sm md:text-[15px] font-regular text-dark-teal/80 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Arrow separator (only visible on desktop between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mt-10 shrink-0">
                  <svg className="w-6 h-6 text-primary-teal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
              
            </React.Fragment>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
