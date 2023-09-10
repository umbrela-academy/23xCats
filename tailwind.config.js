/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./gapl/src/**/*.{html,ts,scss}",
    "./ui/src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    'postcss-nesting',
    require('daisyui')
  ],
}

