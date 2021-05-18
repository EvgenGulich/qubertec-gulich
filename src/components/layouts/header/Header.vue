<template>
  <header>
    <div class="header__container">
      <div class="header__login">
        <p>
          לארשי לאר <strong>שיןכוס</strong><br />
          <strong>123456</strong> רפסמ <br />
          <span
            v-if="!this.$route.path === '/result'"
            class="header__login_discription"
            >השמ םייח ,םול</span
          >
        </p>
      </div>
      <RouterLink to="/" class="header__acount">
        <div class="header__avatar">
          <img src="../../../assets/image/icon-header.svg" alt="icon" />
        </div>
      </RouterLink>
    </div>
    <div
      v-if="this.$route.path === '/'"
      class="header__container header__description"
    >
      <p>השמ םייח ,םול</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    box-shadow: (0px 0px 20px rgba(0, 0, 0, 0.2));
    padding: 2.1rem 0;
    background: white;
    width: 100%;
  }
  &__login {
    width: 13rem;
    p {
      text-align: right;
      color: rgba(0, 156, 65, 1);
    }
    &_discription {
      display: none;

      @media screen and (max-width: 768px) {
        display: inline-block;
        color: #ff7728;
      }
    }
  }
  &__avatar {
    background-color: #009c41;
    border-radius: 0.8rem;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    margin: auto 1.25rem;
    cursor: pointer;

    img {
      margin: auto;
    }
  }
  &__description {
    z-index: 1;
    box-shadow: none;
    background-color: #f5f5f5;

    @media screen and (max-width: 768px) {
      display: none;
    }

    p {
      direction: rtl;
      padding-right: 3.875rem;
      color: rgba(95, 95, 95, 1);
    }
  }
  &__acount {
    display: flex;
  }
}
</style>
