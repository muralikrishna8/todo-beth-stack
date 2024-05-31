/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/view/**/*.{ts,tsx}",
    "./src/ui_components/**/*.{ts,tsx}"
  ],
  theme: {
    colors: {
      'greenish': {
        primary: '#719191',
        DEFAULT: '#719191',
        secondary: '#eaf1f1',
        tertiary: '#fafafa',
        accent: '#eb9a78'
      },
    },
  },
  plugins: [],
}