import React from 'react';
import toteBag from '../assets/discover/tote-bag.png';
import pushpin from '../assets/discover/pushpin.png';
import books from '../assets/discover/books.png';
import foundMark from '../assets/discover/found-mark.svg';
import { Deco, Fill } from './decor/Deco';
import Button from './ui/Button';
import MarqueeBanner from './MarqueeBanner';

/*
 * "Discover" section (replaces the old Features section): one card, "Everything
 * you need to move forward". Desktop coordinates come from Figma "Discover
 * Section" (1440 wide, below the purple strip); mobile from the mobile frame
 * (402 wide). The card is a group: folder tabs + white card + text, with photo
 * stickers and the "Found fact" note placed on top.
 */

const NOTE_SHADOW = 'rgba(0,0,0,0.25)';
const u = (n) => `calc(${n} * var(--u))`;
const m = (n) => `calc(${n} * var(--m))`;

const scrollToWaitlist = () => {
  document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
};

// ---------------------------------------------------------------- card 1
const CardOneDesktopStickers = () => (
  <div className="absolute inset-0 hidden lg:block">
    <Deco box={[611, 152, 402.36, 294.681]} size={[223.073, 363.508]} rotate={-102.17} shadow={[3, 0, 0.3, NOTE_SHADOW]}
      innerStyle={{ background: '#FFD0FF', borderRadius: u(4) }} />
    {/* Note text: centred on the note (about 65px clear on every side) and tilted at exactly the note's angle (-102.17 + 90 = -12.17deg). */}
    <Deco box={[685.78, 229.07, 252.79, 140.55]} size={[238.692, 92.308]} rotate={-12.17}>
      <div className="w-full h-full flex items-center justify-center">
        <p className="opsz-28 text-center text-brand-ink leading-[0.97]" style={{ fontSize: u(19) }}>
          Signing up for Found is completely free. No hidden costs, no catch, just full access to every opportunity on your campus.
        </p>
      </div>
    </Deco>
    <Deco box={[584, 199, 55, 56]}><Fill src={foundMark} /></Deco>
    <Deco box={[934.7, 88.3, 83.4, 96.3]} size={[80.95, 94.2]} rotate={1.51}><Fill src={pushpin} /></Deco>
    <Deco box={[945, 321, 91.024, 107.521]} size={[88, 105]} rotate={1.67}><Fill src={books} /></Deco>
    <Deco box={[548.1, 380.6, 174.321, 66.1]} size={[170, 45]} rotate={-8.23}>
      <Button as="span" tone="ink" className="opsz-28 w-full h-full tracking-[-0.02em]" style={{ borderWidth: u(2), fontSize: u(17) }}>
        FOUND FACT
      </Button>
    </Deco>
    <Deco box={[29, 475, 214.44, 57.68]} size={[214, 56]} rotate={-0.45}>
      <Button tone="orange" onClick={scrollToWaitlist} className="opsz-28 font-medium pointer-events-auto w-full h-full tracking-[-0.02em]" style={{ borderWidth: u(2), fontSize: u(17) }}>
        JOIN WAITLIST
      </Button>
    </Deco>
    <Deco box={[580, 412, 152.576, 192.74]} size={[112.986, 169.479]} rotate={14.82}><Fill src={toteBag} /></Deco>
  </div>
);

const CardOneMobileStickers = () => (
  <div className="absolute inset-0 lg:hidden">
    <Deco unit="m" box={[19, 254, 143.32, 42.12]} size={[143, 41]} rotate={-0.45}>
      <Button tone="orange" onClick={scrollToWaitlist} className="opsz-28 font-medium pointer-events-auto w-full h-full tracking-[-0.02em]" style={{ borderWidth: m(2), fontSize: m(14) }}>
        JOIN WAITLIST
      </Button>
    </Deco>
    <Deco unit="m" box={[42.41, 292.38, 275.542, 183.971]} size={[252.437, 127.554]} rotate={-13.77} shadow={[2.059, 0, 0.103, NOTE_SHADOW]}
      innerStyle={{ background: '#FFD0FF', borderRadius: m(2.746) }}>
      {/* Text sits inside the note, so it shares the note's exact angle, centred both ways. */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-center text-brand-ink" style={{ width: m(203), fontSize: m(14), lineHeight: 0.97 }}>
          Signing up for Found is completely free. No hidden costs, no catch, just full access to every opportunity on your campus.
        </p>
      </div>
    </Deco>
    <Deco unit="m" box={[15, 442, 100.323, 45.004]} size={[96.785, 30.202]} rotate={-9.02}>
      <Button as="span" tone="ink" className="w-full h-full tracking-[-0.02em]" style={{ borderWidth: m(1.373), borderRadius: m(2.746), fontSize: m(12) }}>
        FOUND FACT
      </Button>
    </Deco>
    <Deco unit="m" box={[25, 335, 34.678, 35.343]} size={[33.634, 34.321]} rotate={-1.77}><Fill src={foundMark} /></Deco>
    <Deco unit="m" box={[285, 385, 48.06, 57.34]} size={[46.46, 56.01]} rotate={1.67}><Fill src={books} /></Deco>
    <Deco unit="m" box={[118, 442, 69.791, 98.21]} size={[62.235, 93.353]} rotate={4.78}><Fill src={toteBag} /></Deco>
    <Deco unit="m" box={[280, 270, 31.145, 36.38]} size={[30.908, 36.185]} rotate={-0.18}><Fill src={pushpin} /></Deco>
  </div>
);

const CardOne = () => (
  <div className="absolute left-[calc(24*var(--m))] top-[calc(36*var(--m))] w-[calc(354*var(--m))] h-[calc(543*var(--m))] lg:left-[calc(169*var(--u))] lg:top-[calc(101*var(--u))] lg:w-[calc(1078*var(--u))] lg:h-[calc(596*var(--u))]">
    {/* Folder tabs */}
    <div className="hidden lg:block">
      <div className="absolute left-0 top-0 bg-brand-pink border border-brand-tab-border rounded-t-[9.5px]" style={{ width: u(344), height: u(191) }} />
      <div className="absolute top-0 bg-brand-lime border border-brand-tab-border rounded-t-[9.5px]" style={{ left: u(226), width: u(222), height: u(213) }} />
    </div>
    <div className="lg:hidden absolute left-0 top-0 border border-b-0 border-brand-tab-border rounded-t-[10px] overflow-hidden" style={{ width: m(260), height: m(73) }}>
      <div className="absolute left-0 top-0 bg-brand-pink" style={{ width: m(140), height: m(56) }} />
      <div className="absolute top-0 bottom-0 bg-brand-lime border-l border-brand-tab-border rounded-t-[10px]" style={{ left: m(128.5), width: m(129.5) }} />
    </div>

    {/* White card */}
    <div className="absolute left-0 right-0 bg-white border border-brand-tab-border rounded-2xl top-[calc(33*var(--m))] h-[calc(510*var(--m))] lg:top-[calc(52*var(--u))] lg:h-[calc(544*var(--u))]" />

    {/* Text */}
    <div className="absolute flex flex-col gap-[calc(34*var(--m))] left-[calc(20*var(--m))] right-[calc(20*var(--m))] top-[calc(64*var(--m))] lg:gap-0 lg:right-auto lg:left-[calc(32*var(--u))] lg:top-[calc(109*var(--u))] lg:w-[calc(611*var(--u))]">
      <h2 className="opsz-28 font-bold uppercase tracking-[-0.02em] text-brand-ink w-[calc(294*var(--m))] text-[length:calc(24*var(--m))] leading-[calc(27*var(--m))] lg:w-full lg:h-[calc(149*var(--u))] lg:text-[length:calc(50*var(--u))] lg:leading-[1.2]">
        Everything you need to move forward
      </h2>
      <p className="opsz-28 text-brand-ink max-w-[calc(256*var(--m))] lg:max-w-none text-[length:calc(16*var(--m))] leading-[calc(17*var(--m))] lg:text-brand-ink lg:mt-[calc(61*var(--u))] lg:w-[calc(420*var(--u))] lg:text-[length:calc(22*var(--u))] lg:leading-[1.02]">
        Share your interests and goals, and Found matches you with everything your campus has to offer. Picked for you, not for everyone.
      </p>
    </div>

    <CardOneDesktopStickers />
    <CardOneMobileStickers />
  </div>
);

const Discover = () => {
  return (
    <section className="relative bg-brand-sky">
      <MarqueeBanner variant="hub" tone="purple" />
      <div className="relative w-full -mt-[calc(1*var(--m))] lg:mt-0 h-[calc(575*var(--m))] lg:h-[calc(746*var(--u))]">
        <CardOne />
      </div>
    </section>
  );
};

export default Discover;
