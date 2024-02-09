export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        navigation: '#1d1d17',
        primary: '#50968f',
      },
      spacing: {
        '13': '3.25rem',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        openSans: ['Open Sans', 'serif'],
      },
    },
  },
}
