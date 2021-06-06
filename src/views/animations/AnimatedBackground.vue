<template>
  <section class="animated-background">
    <h2>Animated Background</h2>
    <div id="banner">
      <div class="blocks"></div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    const banner = document.getElementById("banner");
    for (let i = 0; i < 400; i++) {
      const block = document.createElement("div");
      block.classList.add("blocks");
      block.style.animationDelay = `${i * 0.05}s`;
      banner.appendChild(block);
    }
  }
};
</script>
<style lang="scss">
.animated-background {
  width: 100vw;
  height: 100vh;
  @extend %flex-column;
  font-family: $font-poppins;
  position: relative;
  background-color: #2a4747;
  overflow: hidden;

  h2 {
    color: #e0bad7;
    position: relative;
    width: 100%;
    height: 100vh;
    text-align: center;
    line-height: 100vh;
    font-size: 8vw;
    font-weight: 700;
  }

  #banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

    .blocks {
      position: relative;
      display: block;
      width: 5vw;
      height: 5vh;
      background: #fff;
      animation: animate 0.75s ease-in-out forwards;
      opacity: 0;

      &:nth-child(even) {
        animation: animate 1s ease-in-out forwards;
      }

      &:nth-child(7n + 3) {
        animation: animate 2.5s ease-in-out forwards;
      }

      &:nth-child(7n + 7) {
        animation: animate 1.5s ease-in-out forwards;
      }
    }
  }
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: scaleX(0) translateY(500px);
  }
  50% {
    opacity: 1;
    background-image: url("../../assets/food.jpg");
    background-position: center;
    background-attachment: fixed;
  }
  100% {
    opacity: 1;
    transform: scaleX(1) translateY(0);
    background-image: url("../../assets/food.jpg");
    background-position: center;
    background-attachment: fixed;
  }
}
</style>
