import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2072f9',
          light: '#4089fa',
          dark: '#1860d9',
        },
        secondary: {
          DEFAULT: '#1a1f2e',
          light: '#2a3040',
          dark: '#0a0f1e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config