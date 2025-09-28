/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#007BFF",
          hover: "#0056b3",
        },
        secondary: {
          DEFAULT: "#F49918",
          hover: "#d9830d",
        },
        accent: {
          DEFAULT: "#28a745",
          hover: "#218838",
        },
        light: "#f8f9fa",
        dark: "#343a40",
      },
    },
  },
  plugins: [],
};

export default config;
