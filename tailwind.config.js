/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F2F7F4',
          100: '#E2EDE6',
          200: '#D8E4DC',
        },
        teal: {
          700: '#1E5C40',
          900: '#143D2B',
        },
        coral: {
          50: '#FDF1EE',
          500: '#E8491E',
        },
        ink: '#141414',
        muted: '#637068',
        border: '#D8E4DC',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
