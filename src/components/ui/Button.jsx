import React from 'react';
import chevron from '../../assets/icons/chevron-forward.svg';

/*
 * The one button/tag style used across the redesign ("join waitlist button"
 * component in Figma): nav buttons, CTAs, and the rotated sticker labels.
 * Size and font size are passed in through className, since they differ per use.
 */
const TONES = {
  purple: 'bg-brand-purple text-white',
  orange: 'bg-brand-orange text-white',
  ink: 'bg-brand-ink text-white',
  sky: 'bg-brand-sky text-brand-ink',
  outline: 'bg-transparent text-white',
  outlineDark: 'bg-transparent text-[#010101]',
};

const Button = ({ tone = 'purple', as = 'button', withChevron = false, className = '', children, ...rest }) => {
  const Tag = as;
  const interactive = as !== 'span';
  const classes = [
    'inline-flex items-center justify-center whitespace-nowrap leading-none rounded border-solid border-white font-display',
    'border-[calc(0.694*var(--m))] lg:border',
    interactive ? 'transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink' : '',
    TONES[tone],
    className,
  ].join(' ');

  return (
    <Tag className={classes} {...(as === 'button' ? { type: 'button' } : {})} {...rest}>
      <span>{children}</span>
      {withChevron && (
        <img src={chevron} alt="" className="w-[calc(20*var(--m))] h-[calc(20*var(--m))] lg:w-[calc(24*var(--u))] lg:h-[calc(24*var(--u))]" />
      )}
    </Tag>
  );
};

export default Button;
