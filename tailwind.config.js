/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D2326',
        blush: '#F9F2F0',
        deep: '#1D4E54',
        mid: '#2B727D',
        lagoon: '#368E9F',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(4rem, 9vw, 7rem)', { lineHeight: '1' }],
      },
      maxWidth: {
        page: '1440px',
      },
    },
  },
  plugins: [],
};
