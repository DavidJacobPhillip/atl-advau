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
      keyframes: {
        scrollCue: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      animation: {
        scrollCue: 'scrollCue 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
    },
  },
  plugins: [],
};
