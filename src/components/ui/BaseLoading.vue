<template>
  <div id="loading">
    <font-awesome-icon icon="spinner" />
  </div>
</template>
<style lang="scss">
#loading {
  position: absolute;
  width: 100%;
  height: 100%;

  & > * {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    animation: spinner 0.7s steps(4) infinite;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
