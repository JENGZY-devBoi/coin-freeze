import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },

    nitro: {
        plugins: [
            '~/server/index.ts'
        ]
    },

    runtimeConfig: {
        mongodbURI: process.env.NUXT_MOGODB_URI
    }
})
