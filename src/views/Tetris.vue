<template>
  <div class="tetris">
    <h2 v-if="end">Game Over</h2>
    <h3>
      Score: <span> {{ score }}</span>
    </h3>
    <button @click="startPause()">Start/Pause</button>

    <div class="container">
      <div class="grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
        <div class="taken"></div>
      </div>

      <!-- Show the upcomming tetromino -->
      <div class="mini-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 10,
      score: 0,
      Tetrominoes: [],
      squares: null,
      currentPosition: 4,
      currentRotation: 0,
      currentTetromino: null,
      tetroInterval: null,
      nextTetromino: null,
      end: false,
      colors: ["red", "blue", "orange", "green", "purple"],
      randomClass: "purple", // Change the tetrominoes color
      nextRandomClass: "orange"
    };
  },
  computed: {},
  methods: {
    createTetrominoes() {
      const lTetromino = [
        [1, 2, this.width + 1, this.width * 2 + 1], //first rotation
        [this.width, this.width + 1, this.width + 2, this.width * 2 + 2], //second rotation
        [1, this.width + 1, this.width * 2, this.width * 2 + 1], //third rotation
        [this.width, this.width * 2, this.width * 2 + 1, this.width * 2 + 2] //fourth rotation
      ];
      const tTetromino = [
        [1, this.width, this.width + 1, this.width + 2],
        [1, this.width + 1, this.width + 2, this.width * 2 + 1],
        [this.width, this.width + 1, this.width + 2, this.width * 2 + 1],
        [1, this.width, this.width + 1, this.width * 2 + 1]
      ];
      const zTetromino = [
        [this.width + 1, this.width + 2, this.width * 2, this.width * 2 + 1],
        [0, this.width, this.width + 1, this.width * 2 + 1],
        [this.width + 1, this.width + 2, this.width * 2, this.width * 2 + 1],
        [0, this.width, this.width + 1, this.width * 2 + 1]
      ];
      const oTetromino = [
        [0, 1, this.width + 1, this.width],
        [0, 1, this.width + 1, this.width],
        [0, 1, this.width + 1, this.width],
        [0, 1, this.width + 1, this.width]
      ];
      const iTetromino = [
        [1, this.width + 1, this.width * 2 + 1, this.width * 3 + 1],
        [this.width, this.width + 1, this.width + 2, this.width + 3],
        [1, this.width + 1, this.width * 2 + 1, this.width * 3 + 1],
        [this.width, this.width + 1, this.width + 2, this.width + 3]
      ];
      this.Tetrominoes = [
        lTetromino,
        tTetromino,
        zTetromino,
        oTetromino,
        iTetromino
      ];
    },
    selectRandomTetromino() {
      //Randomly select a Tetromino
      const randomNumber = Math.floor(Math.random() * this.Tetrominoes.length);

      return Array.from(this.Tetrominoes[randomNumber][this.currentRotation]);
    },
    draw(Tetromino = this.currentTetromino) {
      //Show the tetromino
      this.currentTetromino = Tetromino;
      Tetromino.forEach(elementIndex => {
        this.squares[this.currentPosition + elementIndex].classList.add(
          "tetromino"
        );

        this.squares[this.currentPosition + elementIndex].classList.add(
          this.randomClass
        );
      });
    },
    undraw() {
      //remove the tetromino from the grid
      this.currentTetromino.forEach(elementIndex => {
        this.squares[this.currentPosition + elementIndex].classList.remove(
          "tetromino"
        );
        this.squares[this.currentPosition + elementIndex].classList.remove(
          this.randomClass
        );
      });
    },
    control(e) {
      if (e.keyCode === 37) {
        this.moveLeft();
      } else if (e.keyCode === 38) {
        this.rotate();
      } else if (e.keyCode === 39) {
        this.moveRight();
      } else if (e.keyCode === 40) {
        this.moveDown();
      }
    },
    moveDown() {
      this.undraw();
      this.currentPosition += this.width;
      this.draw();
      this.freez();
    },
    moveLeft() {
      //Move shape left unless it's at the edge or there is a blockage
      this.undraw();
      const isAtleftEdge = this.currentTetromino.some(
        index => (this.currentPosition + index) % this.width === 0
      );
      if (!isAtleftEdge) this.currentPosition -= 1;

      //if there is a blockage , return the shape to its place ( Do not move)
      if (
        this.currentTetromino.some(index =>
          this.squares[this.currentPosition + index].classList.contains("taken")
        )
      )
        this.currentPosition += 1;
      this.draw();
    },

    moveRight() {
      //Move shape left unless it's at the edge or there is a blockage
      this.undraw();
      const isAtRightEdge = this.currentTetromino.some(
        index => (this.currentPosition + index) % this.width === this.width - 1
      );
      if (!isAtRightEdge) this.currentPosition += 1;

      //if there is a blockage , return the shape to its place ( Do not move)
      if (
        this.currentTetromino.some(index =>
          this.squares[this.currentPosition + index].classList.contains("taken")
        )
      )
        this.currentPosition -= 1;
      this.draw();
    },
    rotate() {
      this.undraw();
      let currentTetrominoIndex;
      this.Tetrominoes.forEach((shapes, index) => {
        shapes.forEach(tetromino => {
          if (this.currentTetromino.toString() === tetromino.toString()) {
            currentTetrominoIndex = index;
          }
        });
      });

      //nextRotationIndex
      let nextRotation;
      if (this.currentRotation < 3) {
        nextRotation = this.currentRotation + 1;
      } else {
        nextRotation = 0;
      }

      //check if after rotation there is a blockage
      const rotatedTetromino = this.Tetrominoes[currentTetrominoIndex][
        nextRotation
      ];

      const isAtleftEdge = rotatedTetromino.some(
        index => (this.currentPosition + index) % this.width === 0
      );

      const isAtRightEdge = rotatedTetromino.some(
        index => (this.currentPosition + index) % this.width === this.width - 1
      );

      const thereIsBlockage = rotatedTetromino.some(index =>
        this.squares[
          this.currentPosition + index + this.width
        ].classList.contains("taken")
      );

      if (!isAtleftEdge && !isAtRightEdge && !thereIsBlockage) {
        if (this.currentRotation < 3) {
          this.currentRotation++;
        } else {
          this.currentRotation = 0;
        }
      }

      this.draw(this.Tetrominoes[currentTetrominoIndex][this.currentRotation]);
    },
    freez() {
      if (
        this.currentTetromino.some(ctx =>
          this.squares[
            ctx + this.currentPosition + this.width
          ].classList.contains("taken")
        )
      ) {
        this.currentTetromino.forEach(eachSquareIndex =>
          this.squares[this.currentPosition + eachSquareIndex].classList.add(
            "taken"
          )
        );
        //   Start a new tetromino falling
        this.currentPosition = 4;
        this.currentRotation = 0;
        this.randomClass = this.nextRandomClass;
        this.draw(this.nextTetromino);
        this.nextTetromino = this.selectRandomTetromino();

        //Choose a random color for upcomming tetomino
        this.nextRandomClass = this.colors[
          Math.floor(Math.random() * this.colors.length)
        ];
        this.displayNextTetromino();
        this.addScore();
        this.gameOver();
      }
    },
    displayNextTetromino() {
      const displaySquares = document.querySelectorAll(".mini-grid div");
      const displayWidth = 4;
      const widthDiffrence = this.width - displayWidth;
      displaySquares.forEach(square => {
        square.classList.remove("tetromino");
        square.classList.remove("red", "blue", "green", "orange", "purple");
      });

      this.nextTetromino.forEach(square => {
        while (square >= this.width && square != 13) square -= widthDiffrence;
        displaySquares[square].classList.add("tetromino");
        displaySquares[square].classList.add(this.nextRandomClass);
      });
    },
    startPause() {
      if (this.tetroInterval) {
        clearInterval(this.tetroInterval);
        this.tetroInterval = null;
      } else {
        this.tetroInterval = setInterval(this.moveDown, 1000);
      }
    },
    addScore() {
      const grid = document.querySelector(".grid");
      for (let i = 0; i < 199; i += this.width) {
        const row = [
          i,
          i + 1,
          i + 2,
          i + 3,
          i + 4,
          i + 5,
          i + 6,
          i + 7,
          i + 8,
          i + 9
        ];

        if (
          row.every(index => this.squares[index].classList.contains("taken"))
        ) {
          this.score += this.width;
          row.forEach(index => {
            this.squares[index].classList.remove("taken");
            this.squares[index].classList.remove("tetromino");
            this.squares[index].classList.remove(
              "red",
              "blue",
              "green",
              "orange",
              "purple"
            );
          });
          const rowRemoved = this.squares.splice(i, this.width);
          this.squares = rowRemoved.concat(this.squares);
          this.squares.forEach(cell => grid.appendChild(cell));
        }
      }
    },
    gameOver() {
      if (
        this.currentTetromino.some(ctx =>
          this.squares[ctx + this.currentPosition].classList.contains("taken")
        )
      ) {
        this.end = true;
        clearInterval(this.tetroInterval);
      }
    }
  },
  mounted() {
    this.squares = Array.from(document.querySelectorAll(".grid div"));
    this.createTetrominoes();
    this.draw(this.selectRandomTetromino()); //Draw the Tetromino
    this.tetroInterval = setInterval(this.moveDown, 1000);
    document.addEventListener("keyup", this.control);

    //show Next upcomming shape in mini-grid
    this.nextTetromino = this.selectRandomTetromino();
    this.displayNextTetromino();
  }
};
</script>
<style lang="scss" scoped>
.tetris {
  width: 100vw;
  height: 100vh;
  @extend %flex-column;

  .container {
    display: flex;
    align-items: center;

    .grid {
      width: 200px;
      height: 400px;
      background: yellow;
      display: flex;
      flex-wrap: wrap;
      margin: 20px;

      div {
        width: 20px;
        height: 20px;
      }
    }

    .mini-grid {
      width: 80px;
      height: 80px;
      display: flex;
      flex-wrap: wrap;
      background: yellow;

      div {
        height: 20px;
        width: 20px;
      }
    }

    .blue {
      background-color: rgb(0, 102, 255);
    }
    .orange {
      background-color: rgb(252, 235, 0);
    }
    .green {
      background-color: rgb(30, 255, 0);
    }
    .purple {
      background-color: rgb(204, 0, 255);
    }
    .red {
      background-color: rgb(167, 0, 0);
    }
  }
}
</style>
