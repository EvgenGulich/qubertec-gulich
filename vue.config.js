module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main.module.scss";`,
      },
    },
  },
};
