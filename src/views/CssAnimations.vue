<template>
  <section class="css-animations">
    <router-link :to="{ name: 'Coffee' }">Coffee Cup</router-link>
    <router-link :to="{ name: 'Loader' }">Wavy Loader</router-link>
    <router-link :to="{ name: 'Background' }">Animated Background</router-link>
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
