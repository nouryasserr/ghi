/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "0",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#faebeb",
          200: "#f0c4c2",
          300: "#e69c99",
          400: "#db7570",
          500: "#BC352F",
          600: "#b8342e",
          700: "#8f2824",
          800: "#661d19",
          900: "#140605",
        },
      },
      screens: {
        xs: "474px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
