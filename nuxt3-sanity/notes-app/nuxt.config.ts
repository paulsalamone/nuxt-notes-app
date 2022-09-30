// https://v3.nuxtjs.org/api/configuration/nuxt.config

import sass from "sass";

export default defineNuxtConfig({
  build: {
    loaders: {
      scss: {
        implementation: sass,
      },
    },
  },
  css: ["~/assets/styles/index.scss"],
  modules: [
    // ...
    ["@nuxtjs/sanity"],
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  sanity: {
    projectId: "syitfzqm",
    apiVersion: "2022-09-30",
    dataset: "production",
  },
});
