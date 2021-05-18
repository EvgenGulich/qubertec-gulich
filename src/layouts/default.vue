<template>
  <div id="default">
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../components/layouts/header/Header";
export default {
  name: "default",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style></style>
