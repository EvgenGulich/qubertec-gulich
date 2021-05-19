module.exports = {
  css: {
    publicPath: "/qubertec-gulich/",
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main.module.scss";`,
      },
    },
  },
};
