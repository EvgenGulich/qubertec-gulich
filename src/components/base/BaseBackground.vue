<template>
  <div>
    <div class="background" v-if="src === 'Home'">
      <img
        class="background-img"
        src="../../assets/image/banner.png"
        alt="banner"
      />
      <div class="background-overflow"></div>
    </div>
    <div class="background" v-else-if="src === 'Result'">
      <img
        class="background-img"
        src="../../assets/image/banner__result.png"
        alt="banner"
      />
      <div class="background-overflow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseBackground",
  data() {
    return {};
  },
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: -1;
}
.background-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.background-overflow {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(33, 50, 94, 0.8);
}
</style>
