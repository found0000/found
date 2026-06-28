/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#00A3A3', // Brighter, more vibrant teal (was #008081)
        'cream': '#FDFDF5',
        'accent-coral': '#ff6c56ff', // Brighter, punchier coral (was #E3735F)
        'dark-teal': '#003435',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
