import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import waves from '../assets/footer/waves.svg';
import wavesMobile from '../assets/footer/waves-mobile.svg';
import selectChevron from '../assets/icons/select-chevron.svg';
import { Deco, Fill } from './decor/Deco';
import Button from './ui/Button';

const YEAR_OPTIONS = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Grad'];
const INTEREST_OPTIONS = ['Opportunities', 'Pathways', 'Mentors', 'Course Recommendations', 'Connections', 'Other'];

/*
 * Sizes use --k: the mobile unit (--m) below lg and the desktop unit (--u) from
 * lg up (set on the <footer>), so the form scales with the rest of the design.
 */
const LABEL = 'text-white font-bold uppercase tracking-[calc(0.6*var(--k))] text-[length:calc(12*var(--k))] leading-[calc(16*var(--k))]';
const FIELD_TEXT = 'text-[length:calc(15*var(--k))] text-brand-ink';
const FIELD_BOX = 'w-full h-[calc(52*var(--k))] rounded-[calc(6*var(--k))] bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]';
const FOCUS = 'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple';

/*
 * Custom dropdown (design shows a styled select). When open, the options list
 * sits in the page flow directly under the field and pushes the fields below it
 * down, as in the design. A hidden required input keeps the browser's native
 * "please fill in this field" validation working, as before.
 */
const Dropdown = ({ id, label, value, displayValue, options, optionLabel = (o) => o, open, onToggle, onSelect }) => {
  const ref = useRef(null);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => ref.current && !ref.current.contains(e.target) && onToggle(false);
    const onKey = (e) => e.key === 'Escape' && onToggle(false);
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onToggle]);

  return (
    <div ref={ref} className="relative flex flex-col gap-[calc(8*var(--k))]">
      <span id={`${id}-label`} className={LABEL}>{label}</span>

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}`}
        onClick={() => onToggle(!open)}
        className={`${FIELD_BOX} flex items-center justify-between text-left px-[calc(20*var(--k))] ${FOCUS}`}
      >
        <span className={`${FIELD_TEXT} leading-[calc(24*var(--k))] ${value === '' ? '!text-[#86929C]' : ''}`}>
          {value === '' ? 'Select...' : displayValue}
        </span>
        <img
          src={selectChevron}
          alt=""
          className={`w-[calc(22.5*var(--k))] h-[calc(22.5*var(--k))] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Hidden input to keep native form 'required' validation working */}
      <input
        type="text"
        required
        value={value}
        onChange={() => {}}
        className="opacity-0 absolute pointer-events-none w-0 h-0 bottom-0 left-1/2"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/*
        Opens and closes smoothly, like the FAQ: the row grows from 0fr to 1fr.
        Closed options are inert, so they can't be tabbed to or read out.
      */}
      <div
        inert={!open}
        className={`-mt-[calc(8*var(--k))] grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        {/* The 8px gap below the field lives inside the list, so a closed list takes no space at all. */}
        <div className="overflow-hidden"><div className="pt-[calc(8*var(--k))]">
          <ul
            role="listbox"
            aria-labelledby={`${id}-label`}
            className="list-none m-0 p-0 py-[calc(10*var(--k))] bg-white rounded-[calc(6*var(--k))]"
          >
            {options.map((option) => (
              <li key={option} role="option" aria-selected={value === option}>
                <button
                  type="button"
                  onClick={() => onSelect(option)}
                  className={`w-full h-[calc(36*var(--k))] flex items-center text-left px-[calc(24*var(--k))] text-[length:calc(16*var(--k))] text-black hover:bg-black/5 focus-visible:bg-black/5 focus:outline-none ${value === option ? 'font-bold' : ''}`}
                >
                  {optionLabel(option)}
                </button>
              </li>
            ))}
          </ul>
        </div></div>
      </div>
    </div>
  );
};

const TextField = ({ id, label, type = 'text', placeholder, value, onChange }) => (
  <div className="flex flex-col gap-[calc(8*var(--k))]">
    <label htmlFor={id} className={LABEL}>{label}</label>
    <input
      type={type}
      id={id}
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${FIELD_BOX} px-[calc(24*var(--k))] lg:bg-brand-input-bg placeholder:text-brand-placeholder ${FIELD_TEXT} ${FOCUS}`}
    />
  </div>
);

// Pill-shaped outline button with a thin white border (Figma v2).
const ContactButton = ({ className }) => (
  <Button
    as="a"
    href="mailto:hello@usefound.co"
    tone="outline"
    className={`rounded-full !border font-bold tracking-[0.05em] ${className}`}
  >
    CONTACT US
  </Button>
);

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    email: '',
    interest: '',
    otherInterest: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  // Unchanged from the previous version: same Firestore collection and fields.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await addDoc(collection(db, 'waitlist'), {
        name: formData.name,
        year: formData.year,
        email: formData.email,
        interest: formData.interest === 'Other' ? formData.otherInterest : formData.interest,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', year: '', email: '', interest: '', otherInterest: '' });
      }, 3000);
    } catch (err) {
      console.error("Firebase error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="waitlist-form"
      className="relative overflow-hidden bg-brand-orange [--k:var(--m)] lg:[--k:var(--u)] scroll-mt-[calc(64*var(--m))] lg:scroll-mt-[76px]"
    >
      {/*
        Desktop: the form sits in the page flow (151 from the top, 234 below), so
        the footer grows when a dropdown opens. 126 + form + 67 = 641, the Figma height.
      */}
      <div className="relative w-full min-h-[calc(875*var(--k))] pb-[calc(66*var(--k))] lg:min-h-[calc(641*var(--k))] lg:pt-[calc(126*var(--k))] lg:pb-[calc(67*var(--k))]">
        {/* Purple waves */}
        {/* The v4 design squashes the desktop waves to 83% height. */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block origin-top [transform:scaleY(0.83)]">
          <Deco box={[-202, 0, 1940.997, 1915.551]}><Fill src={waves} /></Deco>
        </div>
        <div className="absolute inset-0 pointer-events-none lg:hidden">
          {/* Wave artwork from the original design, repositioned to sit close to the redesigned mobile footer (about 68% shape overlap; a canvas SVG export of the new wave would make it exact). */}
          <Deco unit="m" box={[-139, 556, 631, 518]}><Fill src={wavesMobile} /></Deco>
        </div>

        {/* Pitch */}
        <div className="relative flex flex-col items-center text-center text-white pt-[calc(71*var(--k))] lg:absolute lg:items-start lg:text-left lg:pt-0 lg:left-[calc(147*var(--k))] lg:top-[calc(152*var(--k))] lg:w-[calc(469*var(--k))]">
          <h2 className="opsz-28 font-bold uppercase tracking-[-0.02em] w-[calc(387*var(--k))] text-[length:calc(32*var(--k))] leading-[calc(36*var(--k))] lg:w-full lg:text-[length:calc(50*var(--k))] lg:leading-[calc(55*var(--k))]">
            Ready to find opportunities ?
          </h2>
          <p className="opsz-28 font-medium text-[#FAFAFA] mt-[calc(29*var(--k))] w-[calc(343*var(--k))] text-[length:calc(18*var(--k))] leading-[calc(24*var(--k))] lg:mt-[calc(39*var(--k))] lg:w-[calc(419*var(--k))] lg:text-[length:calc(22*var(--k))] lg:leading-[calc(22*var(--k))]">
            Found is launching at Penn State!
          </p>
          <p className="opsz-28 text-[#FAFAFA] mt-[calc(21*var(--k))] text-[length:calc(18*var(--k))] leading-[calc(21*var(--k))] lg:mt-[calc(27*var(--k))] lg:text-[length:calc(22*var(--k))] lg:leading-[calc(26*var(--k))]">
            Join the waitlist to be among the first to<br />experience the platform.
          </p>
          <ContactButton className="mt-[calc(21*var(--k))] w-[calc(154*var(--k))] h-[calc(40*var(--k))] text-[length:calc(14*var(--k))] lg:mt-[calc(41*var(--k))] lg:w-[calc(174*var(--k))] lg:h-[calc(47*var(--k))]" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col gap-[calc(30*var(--k))] mt-[calc(39*var(--k))] px-[calc(24*var(--k))] lg:mt-0 lg:px-0 lg:ml-[calc(720*var(--k))] lg:w-[calc(576*var(--k))]"
        >
          <div className="flex flex-col gap-[calc(20*var(--k))]">
            <TextField
              id="name"
              label="Name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />

            <Dropdown
              id="year"
              label="Year"
              value={formData.year}
              displayValue={formData.year}
              options={YEAR_OPTIONS}
              open={yearDropdownOpen}
              onToggle={setYearDropdownOpen}
              onSelect={(option) => {
                setFormData({...formData, year: option});
                setYearDropdownOpen(false);
              }}
            />

            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />

            <Dropdown
              id="interest"
              label="What interests you the most?"
              value={formData.interest}
              displayValue={formData.interest === 'Other' ? 'Other: Please Specify' : formData.interest}
              options={INTEREST_OPTIONS}
              optionLabel={(option) => (option === 'Other' ? 'Other: Please Specify' : option)}
              open={dropdownOpen}
              onToggle={setDropdownOpen}
              onSelect={(option) => {
                setFormData({...formData, interest: option, otherInterest: ''});
                setDropdownOpen(false);
              }}
            />

            {formData.interest === 'Other' && (
              <TextField
                id="otherInterest"
                label="Please specify"
                placeholder="Tell us more"
                value={formData.otherInterest}
                onChange={(e) => setFormData({...formData, otherInterest: e.target.value})}
              />
            )}
          </div>

          {error && (
            <p role="alert" className="text-white font-bold text-center text-[length:calc(14*var(--k))] -my-[calc(12*var(--k))]">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={submitted || loading}
            className={`w-full h-[calc(56*var(--k))] rounded-[calc(6*var(--k))] uppercase tracking-[calc(0.8*var(--k))] text-[length:calc(16*var(--k))] font-extrabold transition-colors duration-300 ${FOCUS} ${
              submitted ? 'bg-green-500 text-white' : 'bg-brand-sky text-brand-purple hover:brightness-105'
            }`}
          >
            {loading ? 'JOINING...' : submitted ? 'YOU\'RE IN!' : 'JOIN WAITLIST'}
          </button>
        </form>
      </div>
    </footer>
  );
};

export default FooterForm;
