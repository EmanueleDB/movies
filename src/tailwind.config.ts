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
            fontFamily: {
                montserrat: ['Montserrat', 'serif'], // Ensure fonts with spaces have " " surrounding it.
                openSans: ['Open Sans', 'serif'], // Ensure fonts with spaces have " " surrounding it.
            },
        },
    },
}
