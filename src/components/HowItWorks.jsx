import React from 'react';
import stepProfile from '../assets/how-it-works/step-profile.png';
import stepFeed from '../assets/how-it-works/step-feed.png';
import stepMove from '../assets/how-it-works/step-move.png';
import road from '../assets/how-it-works/road.svg';
import roadPin from '../assets/how-it-works/road-pin.svg';
import roadPeople from '../assets/how-it-works/road-people.svg';
import roadFlag from '../assets/how-it-works/road-flag.svg';
import roadArrow from '../assets/how-it-works/road-arrow.svg';

/*
 * Most sizes here are identical in the mobile and desktop Figma frames, so this
 * section uses one unit, --k: the mobile unit (--m) below lg and the desktop
 * unit (--u) from lg up. `k(n)` builds `calc(n * var(--k))` for inline styles.
 */
const k = (n) => `calc(${n} * var(--k))`;

// "Make your move": character + road pieces, positioned as in Figma.
const MoveArt = () => {
  const piece = (src, x, y, w, h, extra = {}) => (
    <img
      src={src}
      alt=""
      className="absolute max-w-none"
      style={{ left: k(x), top: k(y), width: k(w), height: k(h), ...extra }}
    />
  );
  return (
    <div className="relative" style={{ width: k(210) }}>
      {piece(road, 31, 34, 177.482, 196.96, { marginLeft: k(-0.5), marginTop: k(-0.45) })}
      {piece(roadPin, 183, 180, 26, 46)}
      {piece(roadPeople, 121, 95, 18, 21)}
      {piece(roadFlag, 181, 10, 15, 25)}
      {piece(roadArrow, 154, 59, 18, 27)}
      <img
        src={stepMove}
        alt="Student walking along a path towards a flag"
        className="relative max-w-none object-cover [object-position:50%_39%]"
        style={{ width: k(161), height: k(249) }}
      />
    </div>
  );
};

/*
 * Each illustration keeps its original artwork size and is scaled down into
 * the card: [left, top, scale] inside the card for mobile (artM) and desktop
 * (artD), fitted to the v4 design export. gapD = desktop gap before the card.
 */
const STEPS = [
  {
    num: '01.',
    lead: 'Create your',
    word: 'profile',
    desc: 'Tell us a little about yourself — your major, interests, and goals — so Found can find opportunities that fit you.',
    art: (
      <img
        src={stepProfile}
        alt="Student sitting cross-legged with a laptop"
        className="max-w-none object-cover [object-position:50%_65%]"
        style={{ width: k(156), height: k(241) }}
      />
    ),
    artM: [92.1, 66.2, 0.594],
    artD: [83, 108, 0.875],
    gapD: 0,
  },
  {
    num: '02.',
    lead: 'Explore your',
    word: 'feed',
    desc: 'Discover campus opportunities picked for you, all in one personalized feed.',
    art: (
      <img
        src={stepFeed}
        alt="Student holding up a phone showing the Found feed"
        className="max-w-none"
        style={{ width: k(150.687), height: k(234) }}
      />
    ),
    artM: [94.95, 78.8, 0.537],
    artD: [90.6, 120.2, 0.83],
    gapD: 104,
  },
  {
    num: '03.',
    lead: 'Make your',
    word: 'move',
    desc: 'Found something interesting? Explore the details, sign up, or apply and take your next step.',
    art: <MoveArt />,
    artM: [78.5, 81.5, 0.5],
    artD: [75.8, 113.1, 0.83],
    gapD: 84,
  },
];

const StepCard = ({ step }) => (
  <li className="flex flex-col items-center lg:ml-[calc(var(--gap-d)*var(--k))]" style={{ '--gap-d': step.gapD }}>
    {/* Number badge, overlapping the card's top edge */}
    <span className="opsz-28 relative z-10 flex items-center justify-center rounded-full bg-brand-orange text-white font-medium tracking-[-0.02em] w-[calc(45*var(--k))] h-[calc(45*var(--k))] -mb-[calc(23*var(--k))] text-[length:calc(17*var(--k))] lg:w-[calc(67*var(--k))] lg:h-[calc(67*var(--k))] lg:-mb-[calc(28*var(--k))] lg:-translate-x-[calc(4.5*var(--k))] lg:text-[length:calc(25*var(--k))]">
      {step.num}
    </span>

    {/* The description sits in the flow below the (absolutely placed) title and art, so the card grows with it. */}
    <div className="relative grow bg-white border border-brand-ink rounded w-[calc(277*var(--k))] pt-[calc(230*var(--k))] pb-[calc(12*var(--k))] lg:w-[calc(315*var(--k))] lg:pt-[calc(358.6*var(--k))] lg:pb-[calc(27.4*var(--k))]">
      <h3 className="absolute flex gap-[calc(6*var(--k))] whitespace-nowrap uppercase tracking-[-0.02em] leading-none left-[calc(19*var(--k))] top-[calc(38*var(--k))] text-[length:calc(21*var(--k))] lg:gap-[calc(8*var(--k))] lg:left-[calc(22*var(--k))] lg:top-[calc(64*var(--k))] lg:text-[length:calc(25*var(--k))]">
        <span className="text-brand-ink">{step.lead}</span>
        <span className="text-brand-orange">{step.word}</span>
      </h3>

      <div
        className="absolute origin-top-left left-[calc(var(--ax)*var(--k))] top-[calc(var(--ay)*var(--k))] [transform:scale(var(--as))] lg:left-[calc(var(--ax-d)*var(--k))] lg:top-[calc(var(--ay-d)*var(--k))] lg:[transform:scale(var(--as-d))]"
        style={{
          '--ax': step.artM[0], '--ay': step.artM[1], '--as': step.artM[2],
          '--ax-d': step.artD[0], '--ay-d': step.artD[1], '--as-d': step.artD[2],
        }}
      >
        {step.art}
      </div>

      <p className="text-brand-ink ml-[calc(20*var(--k))] w-[calc(225*var(--k))] text-[length:calc(15*var(--k))] leading-[calc(17*var(--k))] lg:ml-[calc(22*var(--k))] lg:w-[calc(262*var(--k))] lg:text-[length:calc(18*var(--k))] lg:leading-[calc(20*var(--k))]">
        {step.desc}
      </p>
    </div>
  </li>
);

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative bg-brand-lime-bg [--k:var(--m)] lg:[--k:var(--u)] scroll-mt-[calc(64*var(--m)_+_40*var(--k))] pt-[calc(56*var(--k))] pb-[calc(36*var(--k))] lg:scroll-mt-[calc(76px_+_40*var(--k))] lg:pt-[calc(92*var(--k))] lg:pb-[calc(98*var(--k))]"
    >
      {/* "OUR PROCESS" label, overlapping the top edge of the section */}
      <span
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-brand-sky text-brand-ink border-2 border-white rounded whitespace-nowrap tracking-[-0.02em] top-[calc(-18*var(--k))] w-[calc(139*var(--k))] h-[calc(37*var(--k))] text-[length:calc(13*var(--k))] lg:top-[calc(-19*var(--k))] lg:w-[calc(170*var(--k))] lg:h-[calc(45*var(--k))] lg:text-[length:calc(17*var(--k))]"
      >
        OUR PROCESS
      </span>

      <h2
        className="opsz-28 text-center font-bold uppercase text-brand-purple tracking-[-0.02em] whitespace-nowrap text-[length:calc(30*var(--k))] leading-[calc(42*var(--k))] lg:text-[length:calc(50*var(--k))] lg:leading-[calc(48*var(--k))]"
      >
        How it works
      </h2>

      <ol className="flex flex-col items-center list-none m-0 p-0 gap-[calc(16*var(--k))] mt-[calc(17*var(--k))] lg:flex-row lg:items-stretch lg:justify-start lg:pl-[calc(152*var(--k))] lg:gap-0 lg:mt-[calc(45*var(--k))]">
        {STEPS.map((step) => (
          <StepCard key={step.num} step={step} />
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
