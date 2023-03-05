/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'White': 'hsl(0, 0%, 100%)',
      'Light-Grey': 'hsl(217, 12%, 63%)',
      'Medium-Grey': 'hsl(216, 12%, 54%)',
      'Dark-Blue': 'hsl(213, 19%, 18%)',
      'Very-Dark-Blue': 'hsl(216, 12%, 8%)',

      'Personal-Orange': 'hsl(24, 100%, 50%)',
      'Personal-Bg-Gray': '#29323b',
      'Personal-CmpBg-Dark-Gray': '#202731',
    },
    extend: {
    },
  },
  plugins: [],
}
