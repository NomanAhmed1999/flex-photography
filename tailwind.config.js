const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {
      fontFamily: {
        stylish: ['StylishFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};