export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  ssr : true,
  devtools: { enabled: true },
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/tairo/layers/xxx#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '../layers/landing',
    '../layers/tairo',

    /**
     * Uncomment the following line to add the Tairo Layout Sidebar layer
     */
    // '../layers/tairo-layout-sidebar',
  ],

  /**
   * Load local font with @fontsource packages
   * @see https://fontsource.org/
   */
  css: [
    '~/assets/css/colors.css',
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
  ],

  experimental: {
    // using chokidar-granular watcher run faster
    // when using layers and/or in large projects
    watcher: 'chokidar-granular',
    // Write early hints when using node server.
    writeEarlyHints: true,
    // Render JSON payloads with support for revivifying complex types.
    renderJsonPayloads: true,
  },

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
    },
  },
  runtimeConfig: {

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://dev.mischool.id/api'
    }
  },
  colorMode: {
    preference: 'light', 
    fallback: 'light', 
  },
})
