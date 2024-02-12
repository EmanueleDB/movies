export default defineNuxtConfig({
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-security',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        'upgrade-insecure-requests': true,
        'media-src': ["'self'"],
        'img-src': ["'self'", 'data:', 'https:', 'blob:'],
      },
      permissionsPolicy: { fullscreen: ['self'] },
    },
    xssValidator: false,
    rateLimiter: false,
  },
  typescript: {
    typeCheck: 'build',
  },
})
