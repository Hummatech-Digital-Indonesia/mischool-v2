module.exports = {
    apps: [
        {
            name: 'Mischool',
            port: '5005',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
};