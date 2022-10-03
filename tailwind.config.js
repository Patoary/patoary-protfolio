/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212428",
          secondary: "#0097e6",
          accent: "#c4cfde",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
