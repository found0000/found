import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1); // All closed by default

  const faqs = [
    { question: "What exactly is this?", answer: "Found is a platform that helps students discover opportunities on their campus, explore the paths others have taken to reach similar goals, and learn from students who've already been there." },
    { question: "What kind of opportunities are available?", answer: "Found recommends opportunities on your campus relevant to your interests and goals, including research positions, scholarships, fellowships, campus organizations, competitions, leadership programs, internships and events." },
    { question: "How is this different from LinkedIn or Handshake?", answer: "LinkedIn helps you build a professional attire. Handshake helps you find jobs. We're focused on helping students navigate college by discovering opportunities, pathways and people relevant to their goals." },
    { question: "Is this only for Penn State Students?", answer: "We're starting by learning from and building for Penn State Students, but our vision extends beyond a single campus." },
    { question: "How much does it cost?", answer: "The early version is completely free for students." },
    { question: "When is it launching?", answer: "We're currently building the first version and gathering feedback from students. Join the waitlist to get early access." },
  ];

  return (
    <section className="w-full bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-teal mb-12 tracking-wide uppercase">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-primary-teal/20 rounded-xl overflow-hidden transition-all duration-300`}
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-semibold text-dark-teal">{faq.question}</span>
                  {/* Simple chevron SVG */}
                  <svg 
                    className={`w-5 h-5 text-dark-teal transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-dark-teal/80 text-sm font-regular leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
