import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#01335D',
        'energy-red': '#F04833',
        'warm-taupe': '#BF9B81',
        'soft-gray': '#E9E9E9',
      },
      fontFamily: {
        inter: ['Poppins', 'sans-serif'],
        ttnorms: ['var(--font-tt-norms)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
