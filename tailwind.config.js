/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Desktop layout starts at 900px (the design scales with the screen from there).
      screens: { lg: '900px' },
      colors: {
        brand: {
          purple: '#6D0250',
          orange: '#FF5F06',
          sky: '#B9D6FE',
          'sky-deep': '#ADC7EB',
          'lime-bg': '#E5FEC4',
          lime: '#CAF492',
          yellow: '#FFCA40',
          pink: '#FEA5FE',
          'pink-soft': '#FFD0FF',
          ink: '#1E1E1E',
          'tab-border': '#888686',
          'faq-ink': '#0B3332',
          'faq-border': '#DBE7E2',
          'input-bg': '#FBFAF2',
          placeholder: '#98A1A9',
        },
      },
      fontFamily: {
        // Inter: free (SIL OFL), loaded from Google Fonts. See index.css for the optical sizes.
        display: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
