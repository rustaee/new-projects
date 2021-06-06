<template>
  <section class="wavy-loader">
    <div class="loader-wrapper">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>
</template>
<style lang="scss">
.wavy-loader {
  width: 100vw;
  min-height: 100vh;
  background: #893168;
  @extend %flex-column;

  .loader-wrapper {
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateX(60deg);

    span {
      position: absolute;
      border: 5px solid #eaeaea;
      box-shadow: 0 5px 0 #4a1942, inset 0 5px 0 #4a1942;
      border-radius: 50%;
      animation: wave 2.5s ease-in-out infinite;

      &:nth-child(1) {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        animation-delay: 1.4s;
      }

      &:nth-child(2) {
        left: 10px;
        top: 10px;
        right: 10px;
        bottom: 10px;
        animation-delay: 1.3s;
      }
      &:nth-child(3) {
        left: 20px;
        top: 20px;
        right: 20px;
        bottom: 20px;
        animation-delay: 1.2s;
      }
      &:nth-child(4) {
        left: 30px;
        top: 30px;
        right: 30px;
        bottom: 30px;
        animation-delay: 1.1s;
      }
      &:nth-child(5) {
        left: 40px;
        top: 40px;
        right: 40px;
        bottom: 40px;
        animation-delay: 1s;
      }
      &:nth-child(6) {
        left: 50px;
        top: 50px;
        right: 50px;
        bottom: 50px;
        animation-delay: 0.9s;
      }
      &:nth-child(7) {
        left: 60px;
        top: 60px;
        right: 60px;
        bottom: 60px;
        animation-delay: 0.8s;
      }
      &:nth-child(8) {
        left: 70px;
        top: 70px;
        right: 70px;
        bottom: 70px;
        animation-delay: 0.7s;
      }
      &:nth-child(9) {
        left: 80px;
        top: 80px;
        right: 80px;
        bottom: 80px;
        animation-delay: 0.6s;
      }
      &:nth-child(10) {
        left: 90px;
        top: 90px;
        right: 90px;
        bottom: 90px;
        animation-delay: 0.5s;
      }
      &:nth-child(11) {
        left: 100px;
        top: 100px;
        right: 100px;
        bottom: 100px;
        animation-delay: 0.4s;
      }
      &:nth-child(12) {
        left: 110px;
        top: 110px;
        right: 110px;
        bottom: 110px;
        animation-delay: 0.3s;
      }
      &:nth-child(13) {
        left: 120px;
        top: 120px;
        right: 120px;
        bottom: 120px;
        animation-delay: 0.2s;
      }
      &:nth-child(14) {
        left: 130px;
        top: 130px;
        right: 130px;
        bottom: 130px;
        animation-delay: 0.1s;
      }
      &:nth-child(15) {
        left: 140px;
        top: 140px;
        right: 140px;
        bottom: 140px;
      }
    }
  }
}

@keyframes wave {
  0%,
  100% {
    transform: translateZ(-100px);
  }

  50% {
    transform: translateZ(100px);
  }
}
</style>
