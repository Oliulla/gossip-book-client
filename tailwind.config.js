/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        gossipbooktheme:{
          primary: '#242526',
          secondary: '#3982E4',
          accent: "#242526",
          neutral: "#18191A",
          "base-100": "#E2E4E9",

          // "--btn-text-case": "lowercase"
        }
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}