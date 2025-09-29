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
          DEFAULT: "#9BBD2D", // Green
          hover: "#82a025", // A slightly darker green for hover states
        },
        secondary: {
          DEFAULT: "#F49918", // Orange
          hover: "#d9830d", // A slightly darker orange for hover states
        },
        dark: {
          DEFAULT: "#1A2A36", // A very dark blue, almost black
          light: "#334155"  // A lighter shade of dark for secondary text
        },
        light: "#f8f9fa", // A very light gray for backgrounds
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        }
      },
    },
  },
  plugins: [],
};

export default config;