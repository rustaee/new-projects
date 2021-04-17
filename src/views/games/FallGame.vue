<template>
  <div class="fall-game">
    <div class="game-over" v-if="gameOver">
      <h1>Game Over!</h1>
      your score: {{ counter - 8 }}
      <button class="restart" @click="restart">Play Again!</button>
    </div>
    <div class="game">
      <div
        class="character"
        id="character"
        :style="{ left: leftPosition + 'px' }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: null,
      bothKeys: 0, //If both left and right key are pressed at the same time
      leftPosition: 190,
      counter: 0, //To track of how many blocks we create in the page
      gameArea: null,
      character: null,
      topPosition: 0, //for Blocks
      gameOver: false
    };
  },
  computed: {},
  methods: {
    moveLeft() {
      this.leftPosition -= 2;
      if (this.leftPosition < 0) this.leftPosition = 0;
    },
    moveRight() {
      this.leftPosition += 2;
      if (this.leftPosition > 378) this.leftPosition = 378;
    },
    createBlocks() {
      if (this.gameArea && this.topPosition < 500 && !this.gameOver) {
        const block = document.createElement("div");
        block.classList.add("block", `${this.counter}`);
        const hole = document.createElement("div");
        hole.classList.add("hole");
        block.append(hole);

        const randomNumber = Math.floor(Math.random() * 360); //Random position for holes
        hole.style.left = `${randomNumber}px`;

        this.gameArea.appendChild(block);
        block.style.top = this.topPosition + 100 + "px";
        this.topPosition += 100;
        this.counter++;
      }

      //Moving character up
      const characterTop = this.character.offsetTop;
      if (characterTop <= 0) {
        this.gameOver = true;
        clearInterval(this.interval);
      }
      const characterLeft = this.character.offsetLeft;
      this.character.style.top = characterTop - 1 + "px";

      //Moving blocks up
      const blocks = document.querySelectorAll(".fall-game .block");
      blocks.forEach(block => {
        const blockTopOffset = block.offsetTop;
        block.style.top = blockTopOffset - 1 + "px";

        if (
          blockTopOffset - 10 > characterTop &&
          blockTopOffset - 30 < characterTop
        ) {
          const holePosition = block.firstChild.offsetLeft;
          if (
            holePosition - 20 < characterLeft &&
            holePosition + 40 > characterLeft + 20
          ) {
            this.character.style.top =
              block.nextElementSibling.offsetTop - 20 + "px";
          }
        }

        if (blockTopOffset == -20) {
          block.remove();
          this.topPosition = 400;
        }
      });
    },
    restart() {
      location.reload();
    }
  },
  mounted() {
    document.addEventListener("keydown", event => {
      if (this.bothKeys == 0) {
        this.bothKeys++;
        if (event.key === "ArrowLeft") {
          this.interval = setInterval(this.moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
          this.interval = setInterval(this.moveRight, 1);
        }
      }
    });

    document.addEventListener("keyup", () => {
      clearInterval(this.interval);
      this.bothKeys = 0;
    });

    //Creating Blocks
    this.character = document.getElementById("character");
    this.gameArea = document.querySelector(".fall-game .game");
    setInterval(this.createBlocks, 3);
  }
};
</script>
<style lang="scss">
.fall-game {
  width: 100vw;
  height: 100vh;
  @extend %flex-column;
  background-color: #2f3061;
  background-image: linear-gradient(#2f3061, #6ca6c1);

  .game-over {
    position: fixed;
    width: 100vw;
    height: 100vh;
    @extend %flex-column;
    background: #2f3061;
    color: #ffe66d;
    z-index: 200;
    animation: fade 0.5s ease-in;

    h1 {
      padding: 10px 0;
    }
    button {
      padding: 15px 50px;
      background: #6ca6c1;
      border: none;
      margin: 20px 0;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    }
  }

  .game {
    width: 400px;
    height: 500px;
    border: 1px solid #343434;
    position: relative;
    overflow: hidden;
    background-color: #f7fff7;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    .character {
      width: 20px;
      height: 20px;
      background: red;
      border-radius: 50%;
      position: relative;
      top: 383px;
      left: 190px;
      z-index: 100;
    }

    .block {
      width: 400px;
      height: 20px;
      background-color: #343434;
      position: absolute;
      top: 100px;
    }

    .hole {
      width: 40px;
      height: 20px;
      background-color: #f7fff7;
      position: relative;
    }
  }
}

@keyframes fade {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
