import React from 'react';

/*
 * Helpers for the decorative "sticker" layer of the redesign (floating shapes,
 * background waves). Figma exports each sticker as an axis-aligned box with a
 * rotated element centred inside it, which is exactly what <Deco> rebuilds.
 *
 * Coordinates are Figma pixels, multiplied by a CSS scale unit:
 *   'u' = desktop frame (1440 wide), 'm' = mobile frame (402 wide).
 * Both are defined in index.css.
 */
const px = (n, unit = 'u') => `calc(${n} * var(--${unit}))`;

/**
 * @param box     [x, y, width, height] of the outer box in Figma
 * @param size    [width, height] of the rotated inner element (defaults to box)
 * @param shadow  Figma drop shadow [dx, dy, blur, color]. Figma applies shadow
 *                offsets in screen space, so it goes on the unrotated outer box.
 */
export const Deco = ({ box, size, rotate = 0, flipX, flipY, unit = 'u', shadow, innerStyle, children }) => {
  const [x, y, w, h] = box;
  const [iw, ih] = size ?? [w, h];
  const transform = [
    rotate ? `rotate(${rotate}deg)` : '',
    flipX || flipY ? `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})` : '',
  ].join(' ').trim();

  return (
    <div
      aria-hidden="true"
      className="absolute flex items-center justify-center pointer-events-none"
      style={{
        left: px(x, unit),
        top: px(y, unit),
        width: px(w, unit),
        height: px(h, unit),
        filter: shadow
          ? `drop-shadow(${px(shadow[0], unit)} ${px(shadow[1], unit)} ${px(shadow[2], unit)} ${shadow[3]})`
          : undefined,
      }}
    >
      <div
        className="relative flex-none"
        style={{ width: px(iw, unit), height: px(ih, unit), transform: transform || undefined, ...innerStyle }}
      >
        {children}
      </div>
    </div>
  );
};

/** An image filling its <Deco> box (`contain` keeps its proportions instead of stretching). */
export const Fill = ({ src, contain = false }) => (
  <img src={src} alt="" className={`absolute inset-0 w-full h-full max-w-none ${contain ? 'object-contain' : ''}`} />
);

/**
 * An SVG whose artwork bleeds outside its layout box (shadows, strokes).
 * `inset` is Figma's [top, right, bottom, left] in percent (usually negative).
 */
export const BleedImg = ({ src, inset: [t, r, b, l] = [0, 0, 0, 0] }) => (
  <img
    src={src}
    alt=""
    className="absolute max-w-none"
    style={{
      top: `${t}%`,
      left: `${l}%`,
      width: `calc(100% - ${l}% - ${r}%)`,
      height: `calc(100% - ${t}% - ${b}%)`,
    }}
  />
);
