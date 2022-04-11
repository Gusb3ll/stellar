import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  ssr: false,
  meta: {
    title: 'Gusbell | Kitpipat Jaritwong',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', name: 'og:image:height', content: '630' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.gusbell.tech' },
      { hid: 'og:title', name: 'og:title', content: 'Gusbell | Kitpipat Jaritwong' },
      { hid: 'og:description ', name: 'og:description', content: 'Kitpipat Jaritwong\'s website' },
      { hid: 'description', name: 'description', content: 'Gusbell | Kitpipat Jaritwong\'s website' },
      { hid: 'og:image', name: 'og:image', content: '/og_img.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  components: true,

  css: ['~/assets/css/global.css'],

  plugins: [],

  modules: [],

  buildModules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
  ],

  typescript: { shim: false },

  windicss: { analyze: true },
})
