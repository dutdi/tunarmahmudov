/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#EEEEEE",
      black: "#222831",
      blue: "#00ADB5",
      darkBlue: "#393E46",
      darkCyan: "#0D7377",
    },
    extend: {
      boxShadow: {
        blueShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        blueMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        whiteMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
