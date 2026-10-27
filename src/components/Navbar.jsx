import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import closeIcon from '../assets/icons/close.svg';
import Button from './ui/Button';
import MarqueeBanner from './MarqueeBanner';

const LINKS = [
  { label: 'ABOUT US', id: 'about' },
  { label: 'HOW IT WORKS', id: 'how-it-works' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Close the mobile menu if the window grows into the desktop layout.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 900px)');
    const onChange = () => desktop.matches && setIsMobileMenuOpen(false);
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      {/* Kept slim on purpose: a fixed 76px bar on desktop (it does not grow with wide screens), 64 units on mobile. */}
      <nav className="sticky top-0 z-50 bg-brand-sky">
        <div className="flex items-center justify-between px-[calc(24*var(--m))] py-[calc(14*var(--m))] lg:h-[76px] lg:py-0 lg:px-[calc(145*var(--u))]">
          <button
            type="button"
            className="shrink-0"
            aria-label="Found, back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logo} alt="Found" className="h-[calc(25*var(--m))] w-auto lg:h-[36px]" />
          </button>

          <div className="flex items-center gap-[calc(20*var(--m))] lg:gap-[12px]">
            {/* Desktop links */}
            {LINKS.map((link) => (
              <Button
                key={link.id}
                tone="outline"
                className="hidden lg:inline-flex lg:w-[150px] lg:h-[38px] lg:text-[14px] tracking-[-0.02em]"
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </Button>
            ))}

            <Button
              tone="purple"
              className="h-[calc(36*var(--m))] px-[calc(12*var(--m))] text-[length:calc(12*var(--m))] tracking-[-0.01em] lg:w-[150px] lg:h-[38px] lg:px-0 lg:text-[14px] lg:tracking-[-0.02em]"
              onClick={() => handleScroll('waitlist-form')}
            >
              JOIN THE WAITLIST
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="lg:hidden w-[calc(32*var(--m))] h-[calc(32*var(--m))]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <img src={isMobileMenuOpen ? closeIcon : menuIcon} alt="" className="w-full h-full" />
            </button>
          </div>
        </div>

        {/* Mobile dropdown: overlays the page instead of pushing it down */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 w-full flex flex-col gap-[calc(20*var(--m))] px-[calc(24*var(--m))] py-[calc(20*var(--m))] bg-brand-sky-deep shadow-xl"
          >
            {LINKS.map((link) => (
              <Button
                key={link.id}
                tone="outlineDark"
                className="w-full h-[calc(37*var(--m))] text-[length:calc(12*var(--m))] tracking-[-0.01em]"
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </nav>

      <MarqueeBanner variant="hub" tone="orange" />
    </>
  );
};

export default Navbar;
