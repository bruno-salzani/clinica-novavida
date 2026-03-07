/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0062b5',
        secondary: '#f1f4f7',
        dark: '#323232',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        heading: ['Nunito', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
