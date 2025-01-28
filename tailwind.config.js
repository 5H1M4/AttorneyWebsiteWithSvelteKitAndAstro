/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1128',
        charcoal: '#1E1E2F',
        offwhite: '#EAEAEA',
        gold: '#D4AF37',
        emerald: '#1F4E47',
        teal: '#2A9D8F'
      }
    }
  },
  plugins: []
};