/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "coral-pink": "#FC7E77",
        "ultra-violet": "#5D54A3",
        'snow': "#FFFCFE",
        'melon': '#FABCBB',
        'grayish-blue': 'hsl(246, 25%, 77%)',
        'emerald': "#37CC8A"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};
