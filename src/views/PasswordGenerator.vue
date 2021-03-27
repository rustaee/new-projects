<template>
  <div class="pass-generate">
    <div class="container">
      <h2>Password Generator</h2>

      <div class="result-container">
        <span class="result">{{ generatedPassword }}</span>
        <button class="btn">
          <font-awesome-icon icon="copy" />
        </button>
      </div>

      <div class="settings">
        <div class="option">
          <label>Password Length</label>
          <input type="number" min="4" max="20" v-model="length" />
        </div>
        <div class="option">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            id="uppercase"
            v-model="options.upper"
            checked
          />
        </div>
        <div class="option">
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            id="lowercase"
            v-model="options.lower"
            checked
          />
        </div>
        <div class="option">
          <label>Include numbers</label>
          <input
            type="checkbox"
            id="numbers"
            v-model="options.number"
            checked
          />
        </div>
        <div class="option">
          <label>Include symbols</label>
          <input
            type="checkbox"
            id="symbols"
            v-model="options.symbol"
            checked
          />
        </div>
      </div>

      <button class="btn larg" @click="generatePassword()">
        Generate Password
      </button>
    </div>
    {{ options.upper }}
    {{ options.lower }}
    {{ options.number }}
    {{ options.symbol }}
    {{ length }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      randomFunctions: {
        lower: this.getRandomLower,
        upper: this.getRandomUpper,
        number: this.getRandomNumber,
        symbol: this.getRandomSymbol
      },
      length: 20,
      options: {
        lower: true,
        upper: true,
        number: true,
        symbol: true
      },
      generatedPassword: ""
    };
  },
  computed: {},
  methods: {
    getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },
    getRandomSymbol() {
      const symbols = "!@#$%^&*(){}[]=<>/,.";
      return symbols[Math.floor(Math.random() * symbols.length)];
    },
    generatePassword() {
      if (
        !this.options.lower &
        !this.options.upper &
        !this.options.number &
        !this.options.symbol
      ) {
        this.generatedPassword = "Choose an option";
      } else {
        let i = 1;
        let pass = "";
        while (i <= this.length) {
          if (this.options.lower) {
            pass += this.getRandomLower();
            i++;
          }
          if (this.options.upper) {
            pass += this.getRandomUpper();
            i++;
          }
          if (this.options.number) {
            pass += this.getRandomNumber();
            i++;
          }
          if (this.options.symbol) {
            pass += this.getRandomSymbol();
            i++;
          }
        }
        this.generatedPassword = pass.slice(0, this.length);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.pass-generate {
  width: 100vw;
  min-height: 100vh;
  background-color: #780116;
  color: #fdf0d8;
  @extend %flex-column;

  .container {
    background-color: #d8572a;
    padding: 20px;
    width: 350px;
    max-width: 100%;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    h2 {
      margin: 10px 0 20px;
    }

    .result-container {
      background-color: #c32f27;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      font-size: 18px;
      letter-spacing: 1px;
      padding: 12px 10px;
      height: 50px;
      width: 100%;

      .result {
        word-wrap: break-word;
        max-width: calc(100% - 40px);
      }

      .btn {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
    }

    .btn {
      border: none;
      background-color: #db7c26;
      color: #fff;
      font-size: 16px;
      padding: 8px 12px;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: #780116;
      }

      &.larg {
        display: block;
        width: 100%;
      }
    }

    .option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;

      input[type="number"] {
        text-align: center;
        width: 40px;
        border: 1px solid #c32f27;
      }
    }
  }
}
</style>
