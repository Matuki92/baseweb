module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        modal: 100000,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
