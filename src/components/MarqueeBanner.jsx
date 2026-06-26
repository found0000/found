import React from 'react';

const MarqueeBanner = () => {
  const repeatedContent = (
    <>
      {Array(4).fill("OPPORTUNITIES ARE EVERYWHERE").map((text, index) => (
        <div key={index} className="flex items-center">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-accent-coral rounded-full flex-shrink-0 mx-6 md:mx-8"></div>
          <span className="text-white text-3xl md:text-2xl font-bold tracking-[0.2em]">
            {text}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <section className="w-full bg-primary-teal py-4 overflow-hidden border-y border-primary-teal/20 flex">
      {/* We need a container wider than screen to scroll smoothly without jumping.
          The best way is to have two identical text spans inside the flex container. */}
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {repeatedContent}
        {repeatedContent}
      </div>
    </section>
  );
};

export default MarqueeBanner;
