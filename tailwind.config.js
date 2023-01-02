/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        gossipbooktheme: {
          primary: "#111827",
          secondary: "#3982E4",
          accent: "#242526",
          neutral: "#18191A",
          "base-100": "#E2E4E9",

          "--btn-text-case": "lowercase",
        },
      },
    ],
  },
  theme: {
    extend: {
      zIndex: {
        "z-index": "10000",
      },
    },
  },
  plugins: [require("daisyui")],
};
