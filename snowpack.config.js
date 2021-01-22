/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
    mount: {
        public: '/',
        src: '/dist',
    },
    plugins: [
        '@snowpack/plugin-typescript'
    ],
    installOptions: {
        installTypes: true,
    },
    devOptions: {
        open: "none",
    },
}