import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
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
      { hid: 'og:description ', name: 'og:description', content: 'Hi I\'m gusbell, Fullstack developer' },
      { hid: 'description', name: 'description', content: 'Hi I\'m gusbell, Fullstack developer' },
      { hid: 'og:image', name: 'og:image', content: '/og_img.png' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@Gusb3ll' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Gusbell | Kitpipat Jaritwong' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Hi I\'m gusbell, Fullstack developer' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/og_img.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: true },
    ],
  },

  components: {
    global: true,
    dirs: ['~/components'],
  },

  css: ['~/assets/css/global.css'],

  plugins: [],

  modules: [
  ],

  buildModules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
  ],

  typescript: { strict: true, typeCheck: true },

  windicss: { analyze: true },
})
