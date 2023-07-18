/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100%)",
      primary: {
        text: {
          "very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
          "soft-red": "hsl(14, 88%, 65%)",
        },
        gradient: {
          "soft-violet": "hsl(273, 75%, 66%)",
          "soft-blue": "hsl(240, 73%, 65%)",
        },
      },
      neutral: {
        text: {
          "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
          "dark-grayish-blue": "hsl(240, 6%, 50%)",
        },
        divider: {
          "light-grayish-blue": "hsl(240, 5%, 91%)",
        },
      },
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
      content: {
        "arrow-down-icon": 'url("src/assets/images/icon-arrow-down.svg")',
      },
      screens: {
        desktop: "1000px",
      },
    },
  },
  plugins: [],
};
