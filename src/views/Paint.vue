<template>
  <section id="paint">
    <canvas
      id="canvas"
      :width="windowWidth"
      :height="windowHeight"
      @mousedown="startDrawing"
      @mouseup="endDrawing"
      @mousemove="drawing"
    ></canvas>
    <div class="toolbox">
      <button id="decrease" @click="changeSize(-5)">-</button>
      <span id="size">{{ size }}</span>
      <button id="increase" @click="changeSize(5)">+</button>
      <input type="color" id="color" @change="changeColor" />
      <button id="clear" @click="clearCanvas">X</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth * 0.7,
      windowHeight: window.innerHeight * 0.7,
      size: 10,
      canvas: null,
      ctx: null,
      color: "black",
      clearEl: null,
      isPressed: false,
      xPos: undefined,
      yPos: undefined
    };
  },
  methods: {
    changeSize(num) {
      this.size += num;
      if (this.size < Math.abs(num)) {
        this.size = Math.abs(num);
      } else if (this.size > 50) {
        this.size = 50;
      }
    },
    startDrawing(e) {
      this.isPressed = true;
      this.xPos = e.offsetX;
      this.yPos = e.offsetY;
    },
    endDrawing() {
      this.isPressed = false;
      this.xPos = undefined;
      this.yPos = undefined;
    },
    drawing(e) {
      if (this.isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        this.drawCircle(x2, y2);
        this.drawLine(this.xPos, this.yPos, x2, y2);
        this.xPos = x2;
        this.yPos = y2;
      }
    },
    drawCircle(x, y) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    },
    drawLine(x1, y1, x2, y2) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.lineWidth = this.size * 2;
      this.ctx.strokeStyle = this.color;
      this.ctx.stroke();
    },
    changeColor(e) {
      this.color = e.target.value;
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }
};
</script>
<style lang="scss" scoped>
#paint {
  width: 100vw;
  height: 100vh;
  background-color: #0b132b;
  @extend %flex-column;

  #canvas {
    background-color: #fff;
  }

  .toolbox {
    box-sizing: border-box;
    background-color: #5bc0be;
    display: flex;
    width: 70vw;
    padding: 1rem;

    & > * {
      background-color: #fff;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      height: 50px;
      width: 50px;
      margin: 0.25rem;
      padding: 0.35rem;
      cursor: pointer;
      border-radius: 50%;

      &:last-child {
        margin-left: auto;
      }
    }
  }
}
</style>
