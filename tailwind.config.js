const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          light: '#AA7DA4',
          DEFAULT: '#7D61A1',
          dark: '#492E75',
          black: '#1E2020',
          white: '#F2EFF5',
        },
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/discuss/issues/129
    // https://tailwindcss.com/docs/plugins#adding-variants
    plugin(function ({ addVariant }) {
      addVariant(
        'supports-backdrop',
        '@supports (backdrop-filter: blur(12px))'
      );
    }),
  ],
};
