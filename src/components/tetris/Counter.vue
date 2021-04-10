<template>
  <div class="tetris-counter">
    <div class="counter">
      <div class="nums">
        <span class="in">3</span>
        <span>2</span>
        <span>1</span>
      </div>
      <h4>Get Ready</h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nums: null
    };
  },
  methods: {
    runAnimation() {
      this.nums.forEach((num, idx) => {
        const nextToLast = this.nums.length - 1;

        num.addEventListener("animationend", e => {
          if (e.animationName === "goIn" && idx !== nextToLast) {
            num.classList.remove("in");
            num.classList.add("out");
          } else if (e.animationName === "goOut" && num.nextElementSibling) {
            num.nextElementSibling.classList.add("in");
          } else {
            this.goToGame();
          }
        });
      });
    },
    goToGame() {
      this.$emit("goToGame");
    }
  },
  mounted() {
    this.nums = document.querySelectorAll(".nums span");
    this.runAnimation();
  }
};
</script>
<style lang="scss">
.tetris-counter {
  width: 100vw;
  height: 100vh;
  background: #020100;

  h4 {
    font-size: 20px;
    margin: 5px;
    text-transform: uppercase;
    color: #f1d302;
  }

  .counter {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .nums {
    color: #ed1c24;
    font-size: 50px;
    position: relative;
    overflow: hidden;
    width: 250px;
    height: 50px;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(120deg);
      transform-origin: bottom center;
      -o-transform-origin: bottom center;
      -ms-transform-origin: bottom center;
      -webkit-transform-origin: bottom center;
      -moz-transform-origin: bottom center;

      &.in {
        transform: translate(-50%, -50%) rotate(0deg);
        animation: goIn 0.5s ease-in-out;
      }

      &.out {
        animation: goOut 0.5s ease-in-out;
      }
    }
  }
}

@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }
  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

@keyframes goOut {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}
</style>
