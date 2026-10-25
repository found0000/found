import React from 'react';
import paperBall from '../assets/icons/paper-ball.png';

/*
 * The scrolling strips ("moving line" in Figma).
 *   variant 'hub'      -> "[paper icon] THE CAMPUS OPPORTUNITY HUB." (header, discover)
 *   variant 'keywords' -> "SCHOLARSHIPS.  RESEARCH. …"               (end of hero)
 * The track is rendered twice and shifted by -50% (animate-marquee) so it loops seamlessly.
 */
const HUB = Array(8).fill('The Campus Opportunity Hub.');
const KEYWORDS = ['Scholarships.', 'Research.', 'Hackathons.', 'Internships.', 'Volunteering.', 'Jobs.'];

const TONES = {
  orange: 'bg-brand-orange',
  purple: 'bg-brand-purple',
};

const ITEM = {
  hub: 'gap-[calc(20*var(--m))] pr-[calc(20*var(--m))] text-[length:calc(12*var(--m))] tracking-[-0.02em] lg:gap-[calc(26*var(--u))] lg:pr-[calc(26*var(--u))] lg:text-[length:calc(17*var(--u))] lg:tracking-[-0.02em]',
  keywords: 'pr-[calc(22*var(--m))] text-[length:calc(12*var(--m))] tracking-[-0.03em] lg:pr-[calc(38*var(--u))] lg:text-[length:calc(21*var(--u))] lg:font-normal lg:tracking-normal',
};

const MarqueeBanner = ({ variant = 'hub', tone = 'orange', className = '' }) => {
  const items = variant === 'hub' ? HUB : [...KEYWORDS, ...KEYWORDS];

  const track = (hidden) => (
    <ul className="flex items-center m-0 p-0 list-none" aria-hidden={hidden || undefined}>
      {items.map((text, index) => (
        <li key={index} className={`flex items-center whitespace-nowrap uppercase font-medium ${ITEM[variant]}`}>
          {variant === 'hub' && (
            <img
              src={paperBall}
              alt=""
              className="flex-none w-[calc(20*var(--m))] h-[calc(19.3*var(--m))] lg:w-[calc(27*var(--u))] lg:h-[calc(26*var(--u))]"
            />
          )}
          {text}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`flex items-center overflow-hidden text-white ${variant === 'keywords' ? 'h-[calc(40*var(--m))]' : 'h-[calc(46*var(--m))]'} lg:h-[calc(66*var(--u))] ${TONES[tone]} ${className}`}>
      <div className="animate-marquee" style={{ animationDuration: '40s' }}>
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
};

export default MarqueeBanner;
