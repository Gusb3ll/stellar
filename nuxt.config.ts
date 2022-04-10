import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  ssr: false,
  meta: {
    title: 'Gusbell | Nuxt 3 template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  components: true,

  css: ['~/assets/css/global.css'],

  plugins: [],

  serverMiddleware: [{ path: '/api', handler: '~/server/api' }],

  modules: [],

  buildModules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],

  typescript: { shim: false },

  windicss: { analyze: true },
})
