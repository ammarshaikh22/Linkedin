/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'custom-size': '48px',
      },
      height: {
        'custom-size': '48px',
      },
    },
  },
  plugins: [],
}

