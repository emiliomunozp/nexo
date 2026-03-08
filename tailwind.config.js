/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexo-primary': '#7C3AED',
        'nexo-accent': '#F59E0B',
        'nexo-dark': '#1F2937',
      }
    },
  },
  plugins: [],
}
