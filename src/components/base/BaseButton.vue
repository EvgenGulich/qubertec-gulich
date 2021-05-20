<template>
  <button class="button" v-bind:class="[trigger ? 'button__back' : '']">
    <p>
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  props: {
    trigger: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
button.button {
  position: relative;
  width: 21.9rem;
  height: 3.6rem;
  background: #009c41;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 2.2rem;
  margin: 0 1rem;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 16rem;
  }

  @media screen and (max-width: 375px) {
    width: 9.75rem;
    height: 2.5rem;
    margin: 0;
  }

  &:hover,
  &:focus {
    box-shadow: (0px 0px 20px rgba(0, 0, 0, 0.8));
  }

  p {
    color: white;
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
}
button.button__back {
  background: #c4c4c4;

  &::after {
    content: "◄";
    display: inline-block;
    font-size: 2rem;
    color: white;
  }
}
</style>
