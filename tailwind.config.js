/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FDE68A', // Light gold
          DEFAULT: '#F59E0B', // Default gold
          dark: '#B45309', // Dark gold
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)',
      },
    },
    
  },
  plugins: [],
}

