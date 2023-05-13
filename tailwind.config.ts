import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      primary: {
        400: '#F3DEBA',
        500: '#A9907E',
        600: '#675D50',
      },
      accent: '#ABC4AA',
      gray: {
        500: '#39393d',
        700: '#1a1b1f',
      },
      red: '#d51111',
    },
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
} satisfies Config
