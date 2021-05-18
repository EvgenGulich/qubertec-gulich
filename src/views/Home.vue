<template>
  <div class="home">
    <BaseBackground :src="src"></BaseBackground>
    <section class="login">
      <div class="login__title">
        <div class="login__text">
          <p>ריחמה תעצהב היפצ - תכרעמל הסינכ</p>
        </div>
        <div class="login__icon">
          <img src="../assets/image/icon-login.svg" alt="icon" />
        </div>
      </div>
      <div class="login__discription">
        שדח דוק תחילש לע ץחל דוק תלביק אל םא ,הסינכה דוק תא ןזה
      </div>
      <div class="login__form">
        <div class="form-group">
          <label class="login__label" for="login">שמתשמ םש</label>
          <div class="input__group">
            <input
              class="login__input"
              type="text"
              name="login"
              id="login"
              v-model="login"
            />
            <div class="input__icon" @click="login = ''">
              <img src="../assets/image/close.svg" alt="delete" />
            </div>
          </div>
        </div>
      </div>
      <div class="login__form">
        <div class="form-group">
          <label class="login__label" for="password">אמסיס</label>
          <div class="input__group">
            <input
              class="login__input"
              type="password"
              name="password"
              id="password"
              v-model="password"
            />
          </div>
        </div>
      </div>
      <div class="login__form">
        <div class="button__group">
          <BaseButton trigger="back">הסינכ</BaseButton>
          <RouterLink to="/result">
            <BaseButton>לוטיב</BaseButton>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseBackground from "../components/base/BaseBackground";
import BaseButton from "../components/base/BaseButton";
export default {
  name: "Home",
  data() {
    return {
      src: "Home",
      login: "",
      password: "",
    };
  },
  components: {
    BaseBackground,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.login {
  margin: auto;
  position: relative;
  width: 80%;

  @media screen and (max-width: 375px) {
    width: 90%;
  }

  &__title {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 3rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.3rem;
      bottom: 0;
      background: white;
      border-radius: 0.125rem;
      @media screen and (max-width: 768px) {
        bottom: -1rem;
        height: 0.18rem;
      }
    }
  }

  &__text {
    padding-right: 1rem;
    display: flex;

    p {
      color: white;
      margin: auto;
      font-size: 3rem;
      text-align: right;

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
  &__discription {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-top: 5rem;
  }
  &__input {
    display: block;
    width: 21.9rem;
    height: 3.625rem;
    border-radius: 2.2rem;
    font-size: 2rem;
    padding: 0 1.5rem 0 2.6rem;
    direction: rtl;

    @media screen and (max-width: 768px) {
      width: 20.6rem;
      height: 2.5rem;
      font-size: 1.125rem;
    }
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;
  margin: auto;
  padding-top: 3.75rem;
}
.input__group {
  display: flex;
  position: relative;
}
.input__icon {
  position: absolute;
  height: 100%;
  display: flex;
  left: 1rem;
  cursor: pointer;

  img {
    margin: auto;
    height: 2rem;
    width: 2rem;
  }
}
.login__label {
  display: block;
  padding-right: 2.7rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-align: right;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 1.125rem;
  }
}
.button__group {
  display: flex;
  justify-content: center;
  padding-top: 5.6rem;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
}
</style>
