module.exports = {
  publicPath: "/qubertec-gulich/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main.module.scss";`,
      },
    },
  },
};
