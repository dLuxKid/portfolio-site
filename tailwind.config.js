/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2s ease-in-out infinite",
      },
      colors: {
        "black-pry": "#161513",
        "black-sec": "#1C1C22",
        "white-pry": "#F0F2F5",
        "white-sec": "#ffffff",
      },

      backgroundColor: {
        "black-pry": "#161513",
        "black-sec": "#1C1C22",
        "white-pry": "#F0F2F5",
        "white-sec": "#ffffff",
      },
    },
  },
  plugins: [],
};
