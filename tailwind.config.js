module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  content: [],
  theme: {
    fontFamily: {
      sans: ['Heebo', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
