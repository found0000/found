import React from 'react';
import waveMain from '../assets/hero/wave-main.svg';
import waveRight from '../assets/hero/wave-right.svg';
import waveLeft from '../assets/hero/wave-left.svg';
import star from '../assets/hero/star.svg';
import circle from '../assets/hero/circle.svg';
import lime from '../assets/hero/lime.svg';
import shapeYellow from '../assets/hero/shape-yellow.svg';
import shapePurple from '../assets/hero/shape-purple.svg';
import waveMobileBase from '../assets/hero/wave-mobile-base.svg';
import waveMobileRibbons from '../assets/hero/wave-mobile-ribbons.svg';
import { BleedImg, Deco, Fill } from './decor/Deco';
import Button from './ui/Button';
import MarqueeBanner from './MarqueeBanner';

/*
 * Notes on the shape assets:
 *  - shape-purple, lime, star, circle: Figma canvas exports (rotation baked in)
 *    with Figma's shadow filters redrawn as plain shapes, so edges stay smooth
 *    in browsers. Mobile reuses them scaled down (same angles as desktop).
 *  - shape-yellow, star-mobile: Figma's SVGs with the shadow filter removed;
 *    the shadow is re-applied in screen space via <Deco shadow>.
 */

// Desktop decoration layer: Figma "Hero Section" (1439 x 1971).
const DesktopDecor = () => (
  <div className="absolute inset-0 pointer-events-none hidden lg:block">
    {/* Purple base shape + sky-blue ribbons. The v4 design squashes this group to 92.4% height and lifts it 54px. */}
    <div className="absolute inset-0 origin-top" style={{ transform: 'translateY(calc(-54 * var(--u))) scaleY(0.924)' }}>
    <Deco box={[-1, 689, 1454, 1291]}>
      <Fill src={waveMain} />
    </Deco>
    <Deco box={[813.9, 552.1, 921.1, 1403.5]} size={[1290.07, 612.373]} rotate={75.23} flipX>
      <Fill src={waveRight} />
    </Deco>
    <Deco box={[-206.9, 363.1, 1819, 1289]} size={[1686.9, 1063.64]} rotate={8.04}>
      <Fill src={waveLeft} />
    </Deco>
    </div>

    {/* Floating shapes */}
    <Deco box={[1145, 77, 64.386, 62.809]} size={[57.831, 32.194]} rotate={137.49} flipY shadow={[6, 3, 0, '#ffdc80']}>
      <BleedImg src={shapeYellow} inset={[-6.21, -13.83, -15.53, -3.46]} />
    </Deco>
    <Deco box={[557, 695, 128, 132]}>
      <Fill src={lime} />
    </Deco>
    <Deco
      box={[225, 69, 57.943, 58.284]}
      size={[42.946, 43.706]}
      rotate={26.52}
      shadow={[4, 8, 0, '#fe6efe']}
      innerStyle={{ background: '#ff9cff', border: 'calc(2 * var(--u)) solid #fff' }}
    />
    <Deco
      box={[147, 359, 76.523, 54.575]}
      size={[72.886, 25.137]}
      rotate={153.97}
      shadow={[11, 4, 0, '#a0c8ff']}
      innerStyle={{ background: '#93c0ff', border: 'calc(3 * var(--u)) solid #fff' }}
    />
    <Deco box={[1200.02, 332, 97, 88]}>
      <Fill src={shapePurple} />
    </Deco>
    <Deco box={[224.88, 600.57, 108, 101]}>
      <Fill src={star} />
    </Deco>
    <Deco box={[1035, 629, 126, 125]}>
      <Fill src={circle} />
    </Deco>
  </div>
);

// Mobile decoration layer: Figma "Mobile Design" hero (402 x 1183).
const MobileDecor = () => (
  <div className="absolute inset-0 pointer-events-none lg:hidden">
    <Deco unit="m" box={[-1, 463, 403, 722]}>
      <Fill src={waveMobileBase} />
    </Deco>
    <Deco unit="m" box={[-90, 373, 600.445, 492.399]}>
      <Fill src={waveMobileRibbons} />
    </Deco>
    <Deco unit="m" box={[283.4, 477.8, 50.7, 50.3]}>
      <Fill src={circle} />
    </Deco>
    <Deco unit="m" box={[115.1, 524, 60.1, 62]}>
      <Fill src={lime} />
    </Deco>
    <Deco unit="m" box={[34.5, 476.8, 46.7, 43.7]}>
      <Fill src={star} />
    </Deco>
    <Deco
      unit="m"
      box={[31.23, 29, 29.606, 29.682]}
      size={[21.004, 21.375]}
      rotate={36.59}
      shadow={[3.36, 5, 0, '#fe6efe']}
      innerStyle={{ background: '#ff9cff', border: 'calc(1.68 * var(--m)) solid #fff' }}
    />
    <Deco unit="m" box={[341.14, 31.99, 25.601, 24.974]} size={[22.995, 12.801]} rotate={137.49} flipY shadow={[2.39, 1.19, 0, '#ffdc80']}>
      <BleedImg src={shapeYellow} inset={[-12.71, -24.47, -20.52, -7.08]} />
    </Deco>
    <Deco
      unit="m"
      box={[38.7, 359.92, 27.782, 19.814]}
      size={[26.462, 9.126]}
      rotate={153.97}
      flipY
      shadow={[6, 1, 0, '#a0c8ff']}
      innerStyle={{ background: '#93c0ff', border: 'calc(2 * var(--m)) solid #fff' }}
    />
    {/* Same artwork as desktop, scaled to the mobile frame's box. */}
    <Deco unit="m" box={[328.36, 353.36, 35.98, 32.64]}>
      <Fill src={shapePurple} />
    </Deco>
  </div>
);

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Below lg the sides beyond the mobile frame are filled: white behind the
    // intro, purple once the wave artwork turns solid purple.
    <section className="relative overflow-x-clip bg-[linear-gradient(#fff_75%,#6D0250_75%)] lg:bg-white">
      <div className="relative w-full h-[calc(1186*var(--m))] lg:h-[calc(1737*var(--u))]">
        <DesktopDecor />
        <MobileDecor />

        {/* Intro */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center top-[calc(102*var(--m))] w-[calc(381*var(--m))] lg:top-[calc(171*var(--u))] lg:w-[calc(630*var(--u))]">
          <h1 className="opsz-28 font-bold capitalize tracking-[-0.02em] text-brand-ink text-[length:calc(32*var(--m))] leading-[calc(33*var(--m))] lg:text-[length:calc(55*var(--u))] lg:leading-[1.02]">
            Your personalized guide to opportunities on campus.
          </h1>
          <p className="lg-opsz-28 text-brand-ink tracking-[-0.02em] mt-[calc(33*var(--m))] w-[calc(300*var(--m))] text-[length:calc(17*var(--m))] leading-[calc(17*var(--m))] lg:mt-[calc(54*var(--u))] lg:w-[calc(381*var(--u))] lg:text-[length:calc(22*var(--u))] lg:leading-[1.045] lg:tracking-normal">
            Found helps you discover the opportunities that match your interest, goals, and ambitions. All in one place.
          </p>
          <Button
            tone="purple"
            onClick={scrollToWaitlist}
            className="opsz-28 font-medium h-[calc(37*var(--m))] text-[length:calc(14*var(--m))] tracking-[-0.02em] mt-[calc(32*var(--m))] w-[calc(139*var(--m))] border-brand-purple lg:mt-[calc(42*var(--u))] lg:w-[calc(212*var(--u))] lg:h-[calc(50*var(--u))] lg:text-[length:calc(17*var(--u))]"
          >
            JOIN WAITLIST
          </Button>
        </div>

        {/* "Why Found exists": the About section the navbar scrolls to */}
        <article
          id="about"
          className="absolute left-1/2 -translate-x-1/2 scroll-mt-[calc(77*var(--m))] top-[calc(580*var(--m))] w-[calc(362*var(--m))] lg:scroll-mt-[calc(76px_+_26*var(--u))] lg:top-[calc(893*var(--u))] lg:w-[calc(880*var(--u))]"
        >
          <div className="relative inline-block bg-brand-yellow border border-b-0 border-brand-tab-border rounded-t-[9.5px] text-white font-bold uppercase tracking-[-0.02em] px-[calc(16*var(--m))] py-[calc(10*var(--m))] text-[length:calc(14*var(--m))] lg:block lg:w-[calc(268*var(--u))] lg:h-[calc(126*var(--u))] lg:-mb-[calc(60*var(--u))] lg:pt-[calc(23*var(--u))] lg:pb-0 lg:pl-[calc(41*var(--u))] lg:pr-0 lg:text-[length:calc(20*var(--u))]">
            Our philosophy
          </div>
          <div className="relative flex flex-col items-center text-center text-brand-ink bg-white rounded-[0_20px_20px_20px] px-[calc(20*var(--m))] pt-[calc(29*var(--m))] pb-[calc(17*var(--m))] lg:rounded-2xl lg:px-[calc(68*var(--u))] lg:pb-0 lg:pt-[calc(55*var(--u))] lg:h-[calc(590*var(--u))]">
            <h2 className="opsz-28 font-bold uppercase tracking-[-0.02em] text-brand-purple text-[length:calc(24*var(--m))] leading-[calc(32*var(--m))] lg:text-[length:calc(50*var(--u))] lg:leading-[calc(48*var(--u))]">
              Why Found exists
            </h2>
            <p className="opsz-28 font-bold mt-[calc(31*var(--m))] w-[calc(290*var(--m))] text-[length:calc(16*var(--m))] leading-[calc(20*var(--m))] lg:mt-[calc(43*var(--u))] lg:w-full lg:text-[length:calc(22*var(--u))] lg:leading-[calc(24*var(--u))]">
              Most opportunities on campus were never secret.
            </p>
            <p className="opsz-28 mt-[calc(23*var(--m))] w-[calc(310*var(--m))] text-[length:calc(15*var(--m))] leading-[1.5] lg:mt-[calc(26*var(--u))] lg:w-full lg:text-[length:calc(22*var(--u))]">
              They were just scattered across inboxes, noticeboards, group chats and one friend of a friend who happened to
              know. By the time you hear about them, the deadline&rsquo;s gone.
            </p>
            {/* Pale pink call-out */}
            <div className="w-full flex flex-col items-center bg-[#F6EEF2] mt-[calc(33*var(--m))] h-[calc(160*var(--m))] pt-[calc(33*var(--m))] lg:mt-[calc(45*var(--u))] lg:h-[calc(184*var(--u))] lg:pt-[calc(38*var(--u))]">
              <h3 className="opsz-28 font-bold uppercase text-brand-purple text-[length:calc(16*var(--m))] leading-[calc(20*var(--m))] lg:text-[length:calc(22*var(--u))] lg:leading-[calc(24*var(--u))]">
                That&rsquo;s why we&rsquo;re building Found.
              </h3>
              <p className="opsz-28 mt-[calc(15*var(--m))] w-[calc(290*var(--m))] text-[length:calc(15*var(--m))] leading-[1.5] lg:mt-[calc(21*var(--u))] lg:w-[calc(600*var(--u))] lg:text-[length:calc(22*var(--u))]">
                One place where everything your campus has to offer lives, matched to your interests, your goals and your
                curiosity.
              </p>
            </div>
          </div>
        </article>
      </div>

      <MarqueeBanner variant="keywords" tone="orange" className="absolute left-0 right-0 top-[calc(1099*var(--m))] lg:top-[calc(1583*var(--u))]" />
    </section>
  );
};

export default Hero;
