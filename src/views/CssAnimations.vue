<template>
  <section class="css-animations">
    <router-link :to="{ name: 'Coffee' }">Coffee Cup</router-link>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
