<template>
  <section class="coffee-cup">
    <div class="cup">
      <div class="steam">
        <span style="animation-delay: -0.5s;"></span>
        <span style="animation-delay: -6.5s;"></span>
        <span style="animation-delay: -1s;"></span>
        <span style="animation-delay: -7s;"></span>
        <span style="animation-delay: -1.5s;"></span>
        <span style="animation-delay: -5s;"></span>
        <span style="animation-delay: -6s;"></span>
        <span style="animation-delay: -2s;"></span>
        <span style="animation-delay: -5.5s;"></span>
        <span style="animation-delay: -9s;"></span>
        <span style="animation-delay: -2.5s;"></span>
        <span style="animation-delay: -8.5s;"></span>
        <span style="animation-delay: -3s;"></span>
        <span style="animation-delay: -4s;"></span>
        <span style="animation-delay: -4.5s;"></span>
        <span style="animation-delay: -8s;"></span>
        <span style="animation-delay: -0.5s;"></span>
        <span style="animation-delay: -6.5s;"></span>
      </div>
      <div class="top-circle">
        <div class="top">
          <div class="coffee"></div>
        </div>
      </div>
      <div class="handle"></div>
    </div>
    <div class="plate"></div>
  </section>
</template>
<style lang="scss">
$cup-color: #f2e8cf;
$cup-shadow: #dddbdb;

.coffee-cup {
  width: 100vw;
  min-height: 100vh;
  background-color: #386641;
  @extend %flex-column;

  .cup {
    width: 300px;
    height: 300px;
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
    position: relative;
    background-image: linear-gradient(to right, $cup-color, $cup-shadow 70%);
    z-index: 10;

    .top-circle {
      width: 100%;
      height: 50px;
      top: -25px;
      border-radius: 50%;
      position: absolute;
      background-image: linear-gradient(to right, $cup-color, $cup-shadow);

      .top {
        position: absolute;
        width: calc(100% - 20px);
        height: 50px;
        background-color: red;
        background-image: linear-gradient(to right, $cup-shadow, $cup-color);
        border-radius: 50%;
        left: 10px;
        top: 5px;
        overflow: hidden;

        .coffee {
          position: absolute;
          width: calc(100% - 10px);
          height: 50px;
          left: 5px;
          border-radius: 50%;
          background-color: #6b0504;
          top: 15px;
        }
      }
    }

    .handle {
      position: absolute;
      border: 25px solid $cup-shadow;
      width: 150px;
      height: 200px;
      border-radius: 50%;
      transform: rotate(35deg);
      right: -70px;
      top: 26px;
    }

    .steam {
      width: calc(100% - 80px);
      position: absolute;
      top: -100px;
      left: 40px;
      z-index: 20;
      @extend %flex-row;
      justify-content: space-evenly;

      span {
        background: #fff;
        width: calc(100% / 30);
        height: 120px;
        border-radius: 50%;
        filter: blur(8px);
        opacity: 0;
        animation: steam 5s linear infinite;
        -webkit-animation: steam 5s linear infinite;
        -moz-animation: steam 5s linear infinite;
        -o-animation: steam 5s linear infinite;
      }
    }
  }

  .plate {
    width: 550px;
    height: 220px;
    position: absolute;
    background-image: linear-gradient(to right, $cup-color, $cup-shadow 70%);
    border-radius: 50%;
    top: calc(50% - 20px);
    box-shadow: 0 35px 35px rgba(0, 0, 0, 0.2);

    &::before {
      content: "";
      width: calc(100% - 20px);
      background-image: linear-gradient(to left, $cup-color, $cup-shadow);
      position: absolute;
      height: calc(100% - 20px);
      border-radius: 50%;
      left: 10px;
      top: 10px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 30px;
      left: 30px;
      right: 30px;
      bottom: 30px;
      background-image: radial-gradient(
        rgba(0, 0, 0, 0.3) 25%,
        transparent,
        transparent
      );
      border-radius: 50%;
    }
  }
}

@keyframes steam {
  0% {
    transform: translateY(0) scaleX(1);
  }

  15% {
    opacity: 1;
  }

  50% {
    transform: translateY(-150px) scaleX(5);
  }

  90% {
    opacity: 0;
  }

  100% {
    transform: translateY(-300px) scaleX(10);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .coffee-cup {
    .cup {
      width: 200px;
      height: 200px;

      .handle {
        width: 100px;
        height: 150px;
        right: -40px;
        top: 15px;
      }
    }

    .plate {
      width: 350px;
      height: 150px;
    }
  }
}
</style>
