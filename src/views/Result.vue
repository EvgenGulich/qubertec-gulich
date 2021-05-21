<template>
  <div class="result__container">
    <BaseBackground src="Result"></BaseBackground>
    <section class="result" dir="ltr">
      <div class="result__title">
        <div class="result__toggle">
          <div
            class="result__toggle_item"
            @click="changeToggleTrigger"
            v-bind:class="[toggleTrigger ? 'active' : '']"
          >
            <p>וקפוהש תוסילופ</p>
          </div>
          <div
            class="result__toggle_item"
            @click="changeToggleTrigger"
            v-bind:class="[toggleTrigger ? '' : 'active']"
          >
            <p>תונורחא תועצה</p>
          </div>
        </div>
        <div class="result__icon">
          <img src="../assets/image/icon-login.svg" alt="icon" />
        </div>
      </div>
      <div class="result__nav">
        <button class="result__button"><p>השדח העצה</p></button>
        <div class="form-group">
          <input class="result__input" type="text" name="search" id="search" />
          <div class="result__icon_label" @click="login = ''">
            <img src="../assets/image/search.svg" alt="search" />
          </div>
        </div>
      </div>
      <BlockResult :resultData="dataResults"></BlockResult>
    </section>
  </div>
</template>

<script>
import BlockResult from "../components/block/BlockResult";
import BaseBackground from "../components/base/BaseBackground";

export default {
  data() {
    return {
      toggleTrigger: false,
      dataResults: [
        {
          cheked: false,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: true,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: false,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: true,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: true,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: true,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: false,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: true,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
        {
          cheked: false,
          id: "123456789012",
          date: "04.04.2020",
          dataStart: "12.10.2019",
          number: "039894872",
          phone: "12-345-67",
          desOne: "םהרבא ןב קחצי",
          desTwo: "רצומה םש",
          code: "בכר",
        },
      ],
    };
  },
  components: {
    BaseBackground,
    BlockResult,
  },
  methods: {
    changeToggleTrigger() {
      this.toggleTrigger = !this.toggleTrigger;
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
}
.result {
  margin: auto;
  position: relative;
  width: 76.25rem;

  @media screen and (max-width: 1200px) {
    width: 75%;
  }

  @media screen and (max-width: 769px) {
    width: 90%;
  }

  &__icon {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &__inform {
    padding-top: 2.2rem;
  }

  &__title {
    display: flex;
    width: 76.25rem;
    justify-content: space-between;
    padding-top: 3rem;
    position: relative;

    @media screen and (max-width: 1200px) {
      width: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.3rem;
      bottom: -1rem;
      background: white;
      border-radius: 0.125rem;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  &__toggle {
    width: 90%;
    height: 3.625rem;
    border-radius: 2.2rem;
    background: white;
    display: flex;
    overflow: hidden;
    margin: auto 0;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 2.5rem;
    }
  }
  &__toggle_item {
    width: 50%;
    display: flex;

    p {
      margin: auto;
      color: #5f5f5f;
      font-size: 1.875rem;

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  &__toggle_item.active {
    background: #ff7728;
    position: relative;

    p {
      color: white;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
      background: #ff7728;
      height: 100%;
      width: 1.8rem;
      border-radius: 0 100% 100% 0 / 0 50% 50% 0;

      @media screen and (max-width: 768px) {
        width: 1.25rem;
      }
    }
  }
  &__toggle_item.active:last-child {
    &::after {
      right: 100%;
      left: auto;
      border-radius: 100% 0 0 100% / 50% 0 0 50%;
    }
  }
}
.result__button {
  position: relative;
  width: 17.75rem;
  height: 3.6rem;
  background: #009c41;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 2.2rem;
  margin-right: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 2.5rem !important;
    height: 2.5rem !important;
  }

  &::before {
    content: "◄";
    display: inline-block;
    font-size: 2rem;
    color: white;
    padding-right: 1rem;

    @media screen and (max-width: 768px) {
      content: "+";
      padding-right: 0%;
    }
  }

  @media screen and (max-width: 375px) {
    width: 9.75rem;
    height: 2.5rem;
    margin: 0;
  }

  &:hover {
    box-shadow: (0px 0px 20px rgba(0, 0, 0, 0.8));
  }

  p {
    color: white;
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1.125rem;
      display: none;
    }
  }
}
.result__nav {
  position: relative;
  display: flex;
  padding-top: 3.75rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.3rem;
      bottom: -1.5rem;
      background: white;
      border-radius: 0.125rem;
    }
  }
}
.result__input {
  display: block;
  flex-grow: 1;
  height: 3.625rem;
  border-radius: 2.2rem;
  font-size: 2rem;
  padding: 0 1.5rem 0 2.6rem;
  direction: rtl;
  border: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 2.5rem;
    font-size: 1.125rem;
    flex-grow: 0;
  }
}
.result__icon_label {
  position: absolute;
  height: 100%;
  display: flex;
  left: 1rem;
  cursor: pointer;

  img {
    margin: auto;
    height: 1.5rem;
    width: 1.5rem;
  }
}
.form-group {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
</style>
