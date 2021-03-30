<template>
  <div class="hover-board">
    <div class="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "#e74c3c",
        "#8e44ad",
        "#3498db",
        "#e67e22",
        "#2ecc71",
        "#f0d719",
        "FFFFFF",
        "#1C6087"
      ],
      SQUERES: 500
    };
  },
  methods: {
    createSqueres() {
      const container = document.querySelector(".hover-board .container");

      for (let i = 0; i < this.SQUERES; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", () => this.setColor(square));
        square.addEventListener("mouseout", () => this.removeColor(square));

        container.appendChild(square);
      }
    },
    setColor(element) {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      element.style.background = color;
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    },
    removeColor(element) {
      element.style.background = "#1d1d1d";
      element.style.boxShadow = "0 0 2px #000";
    }
  },
  mounted() {
    this.createSqueres();
  }
};
</script>
<style lang="scss">
.hover-board {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  @extend %flex-row;

  .container {
    @extend %flex-row;
    flex-wrap: wrap;
    width: 90%;
    max-width: 400px;

    .square {
      background-color: #1d1d1d;
      width: 16px;
      height: 16px;
      margin: 2px;
      box-shadow: 0 0 2px #000;
      transition: 2s ease;

      &:hover {
        transition-duration: 0s;
      }
    }
  }
}
</style>
