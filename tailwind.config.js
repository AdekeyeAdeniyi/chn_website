/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-50%': 'rgba(0, 0, 0, 0.5)',
        'black-70%': '#1c1c1c',
        'green-20%': '#dffe91',
        'gray-40%': '#474747',
        'gray-50%': '#818181',
      },

      backgroundImage: {
        'dark-gradient': 'linear-gradient(rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)',
      },
    },
  },
  plugins: [],
};
