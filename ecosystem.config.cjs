/* eslint-disable prettier-vue/prettier */
module.exports = {
  apps: [
    {
      name: 'Mischool',
      port: '5005',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.app/.output/server/index.mjs',
    },
  ],
}
