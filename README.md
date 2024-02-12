# Project Setup and Execution

This project requires **Node v21.6.1** or higher and **npm v10.4.0**. However, it is recommended to use `pnpm` for a faster experience.

To run the app, use the command: `pnpm run dev`

To perform an ESLint check across the entire app and fix issues, use the command: `pnpm run fix`

To run the tests, use the command: `pnpm run test`
(I have no experience with the tests, but I was able to configure the dependencies to make them work and to add a few basic tests. I consider tests to be very important and I’m looking forward to gaining those skills.)

# Framework

The primary framework used in this project is **Nuxt 3**, which is frequently used in both my professional work and personal projects.

# Dependencies

The project uses several dependencies:

- `nuxt-security`: Enhances Nuxt's protection capabilities.
- `typescript`: Provides static typing.
- `@nuxtjs/tailwindcss` and `@nuxtjs/color-mode`: Tailwind CSS is used for styling, and the color mode package enables dark mode.
- `vueuse`: A library with multiple useful methods. For this project, the `onClickOutside` method was used for the filter dropdown.
- `nuxt-icon`: A simple and effective library that provides access to thousands of icons from [icones.js.org](https://icones.js.org/).
- `prettier`, `eslint`, and `vue-tsc`: These are used for code formatting and error checking.
- `vitest`, `happy-dom`, and `@vue/test-utils`: These are used for testing.

# Architecture Decisions

The project was designed with a minimal number of components to keep it simple. More components could have been created, but they would have been used only once, so it was deemed unnecessary.

For larger projects, Pinia is typically used, but it was not found to be necessary for this project.

The API used in this project (which is free) does not offer many options. Therefore, a custom filter button was created for the search functionality, allowing users to search for shows by name (provided by the API), genre, and network name.

On the homepage, users can scroll through the genres sections horizontally using a trackpad or Apple mouse by simply swiping right or left. For users with a standard mouse, arrows appear on hover. The arrows are set based on the number of shows in the viewport and the responsive media query. On mobile devices, users can swipe with their finger, so no arrows are displayed.

The Slide component is custom-made and styled with Tailwind. It accepts a prop, if `preventOuterClick` is passed, the user will not be able to close the slide by clicking outside the slide container. The slide mounts in the viewport, so there is no need to use `z-index` or similar properties. When the slide opens, another call is made to fetch the season for that specific show.

# Additional Features

- Filter button to search for a show by Name, Network, and Genre.
- Dark mode support.
