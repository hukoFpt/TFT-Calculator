import string from 'vite-plugin-string'

export default {
  plugins: [string({ include: '../assets/data/champions.csv' })],
}