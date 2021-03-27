<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

button:focus,
button:active,
input:focus,
input:active {
  outline: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: $font;
  font-size: $font-size;
  color: $color;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
