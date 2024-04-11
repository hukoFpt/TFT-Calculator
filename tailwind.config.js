module.exports = {
  purge: [
    './src/renderer/src/**/*.{js,ts,jsx,tsx}',
    './src/renderer/src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgr: '#242528',
        bgrhl: '#28292c'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
