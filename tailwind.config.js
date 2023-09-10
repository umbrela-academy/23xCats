/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./gapl/src/**/*.{html,ts}",
    "./ui/src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'postcss-nesting',
  ],
}

