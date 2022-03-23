module.exports = {
  content: [
    './index.html',
    './src/App.vue',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bai: ['Bai Jamjuree', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
        bodoni: ['Bodoni Moda', 'serif'],
        work: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
