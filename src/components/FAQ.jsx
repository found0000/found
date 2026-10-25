import React, { useState } from 'react';
import chevronDown from '../assets/icons/chevron-down.svg';

/*
 * FAQ accordion. One question open at a time (as before); the first one starts
 * open, matching the Figma design. Sizes use --k: the mobile unit (--m) below lg
 * and the desktop unit (--u) from lg up.
 */
const faqs = [
  { question: "What exactly is this?", answer: "Found is a platform that helps students discover opportunities on their campus, explore the paths others have taken to reach similar goals, and learn from students who've already been there." },
  { question: "What kind of opportunities are available?", answer: "Found recommends opportunities on your campus relevant to your interests and goals, including research positions, scholarships, fellowships, campus organizations, competitions, leadership programs, internships and events." },
  { question: "How is this different from LinkedIn or Handshake?", answer: "LinkedIn helps you build a professional attire. Handshake helps you find jobs. We're focused on helping students navigate college by discovering opportunities, pathways and people relevant to their goals." },
  { question: "Is this only for Penn State Students?", answer: "We're starting by learning from and building for Penn State Students, but our vision extends beyond a single campus." },
  { question: "How much does it cost?", answer: "The early version is completely free for students." },
  { question: "When is it launching?", answer: "We're currently building the first version and gathering feedback from students. Join the waitlist to get early access." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-brand-sky [--k:var(--m)] lg:[--k:var(--u)] pt-[calc(114*var(--k))] pb-[calc(61*var(--k))] lg:pt-[calc(119*var(--k))] lg:pb-[calc(68*var(--k))]">
      <div className="mx-auto flex flex-col items-center w-[calc(354*var(--k))] lg:w-[calc(920*var(--k))]">
        <div className="flex flex-col items-center text-center text-brand-ink gap-[calc(17*var(--k))] lg:gap-0">
          <h2 className="opsz-28 font-bold uppercase tracking-[-0.02em] text-[length:calc(32*var(--k))] leading-[calc(37*var(--k))] w-[calc(387*var(--k))] lg:w-auto lg:text-[length:calc(50*var(--k))] lg:leading-[calc(49*var(--k))]">
            Frequently asked questions
          </h2>
          <p className="opsz-28 text-[length:calc(18*var(--k))] leading-[calc(24*var(--k))] lg:mt-[calc(23*var(--k))] lg:relative lg:-left-[calc(4*var(--k))] lg:text-[length:calc(22*var(--k))] lg:leading-[calc(21*var(--k))]">
            Everything you need to know about Found
          </p>
        </div>

        <ul className="w-full flex flex-col list-none m-0 p-0 gap-[calc(16*var(--k))] mt-[calc(27*var(--k))] lg:mt-[calc(34*var(--k))]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-question-${index}`;
            const panelId = `faq-answer-${index}`;
            return (
              <li
                key={faq.question}
                className="bg-white border border-brand-faq-border rounded-md drop-shadow-[0_1px_1px_rgba(0,0,0,0.02)] text-brand-ink tracking-[-0.425px]"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-start justify-between text-left font-bold rounded-md gap-[calc(16*var(--k))] p-[calc(20*var(--k))] text-[length:calc(18*var(--k))] leading-[calc(24*var(--k))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
                  >
                    <span>{faq.question}</span>
                    <img
                      src={chevronDown}
                      alt=""
                      className={`shrink-0 transition-transform duration-300 w-[calc(24*var(--k))] h-[calc(24*var(--k))] ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </h3>

                {/* Animates open/closed by growing the grid row from 0fr to 1fr. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-tab-border -mt-[calc(4*var(--k))] px-[calc(20*var(--k))] pb-[calc(20*var(--k))] text-[length:calc(16*var(--k))] leading-[calc(22*var(--k))]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
