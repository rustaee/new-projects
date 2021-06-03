<template>
  <div class="multi-steps-form">
    <div class="container">
      <article>
        <header>
          <div class="progress">
            <div
              class="progress-step"
              v-for="(step, index) in formSteps"
              :class="{ active: index === activeStep }"
              :key="'step' + index"
            >
              {{ index + 1 }}
            </div>
          </div>
        </header>
        <section :class="animation">
          <h2>{{ formSteps[activeStep].title }}</h2>
          <div class="input-fields">
            <div
              class="input-container"
              v-for="(field, index) in formSteps[activeStep].fields"
              :key="'field' + index"
            >
              <input
                type="text"
                v-model="field.value"
                :class="{ 'wrong-input': !field.valid }"
                required
              />
              <label class="input-label">{{ field.label }}</label>
            </div>
          </div>
          <div class="action">
            <button
              v-if="activeStep + 1 < formSteps.length - 1"
              @click="checkFields"
            >
              Next
            </button>
            <button
              v-if="activeStep + 1 === formSteps.length - 1"
              @click="checkFields"
            >
              Done!
            </button>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 0,
      animation: "animate-in",
      formSteps: [
        {
          title: "HTML Quiz",
          fields: [
            {
              label: "What does HTML stands for?",
              value: "",
              valid: true,
              pattern: /.+/
            },
            {
              label: "Who is making the web standards?",
              value: "",
              valid: true,
              pattern: /.+/
            },
            {
              label: "Element for the largest heading?",
              value: "",
              valid: true,
              pattern: /.+/
            }
          ]
        },
        {
          title: "Css Quiz",
          fields: [
            {
              label: "What does CSS stands for?",
              value: "",
              valid: true,
              pattern: /.+/
            },
            {
              label: "HTML tag for an internal style sheet?",
              value: "",
              valid: true,
              pattern: /.+/
            },
            {
              label: "Property for the background color?",
              value: "",
              valid: true,
              pattern: /.+/
            }
          ]
        },
        {
          title: "Your data",
          fields: [
            {
              label: "Your first name?",
              value: "",
              valid: true,
              pattern: /.+/
            },
            {
              label: "Your last name?",
              value: "",
              valid: true,
              pattern: /.+/
            },
            {
              label: "your email?",
              value: "",
              valid: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            }
          ]
        },
        {
          title: "Thank you for participation!"
        }
      ]
    };
  },
  methods: {
    nextStep() {
      this.animation = "animate-out";
      setTimeout(() => {
        this.animation = "animate-in";
        this.activeStep++;
      }, 500);
    },
    checkFields() {
      let valid = true;
      this.formSteps[this.activeStep].fields.forEach(field => {
        if (!field.pattern.test(field.value)) {
          valid = false;
          field.valid = false;
        } else {
          field.valid = true;
        }
      });
      if (valid) {
        this.nextStep();
      } else {
        this.animation = "animate-wrong";
        setTimeout(() => {
          this.animation = "";
        }, 400);
      }
    }
  }
};
</script>

<style lang="scss">
.multi-steps-form {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  .container {
    @extend %flex-row;
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(#ff8cc6, $multi-steps-form-color);
  }

  article {
    display: flex;
    margin: 10px;
    width: 80%;
    max-width: 720px;
    min-height: 480px;
    perspective: 1000px;

    header {
      @extend %flex-row;
      width: 60px;
      height: 480px;
      background-color: #fff;
      border-right: 2px dotted $multi-steps-form-color;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
    }

    .progress-step {
      @extend %flex-row;
      width: 30px;
      height: 30px;
      background: $multi-steps-form-color;
      color: #fff;
      border-radius: 50%;
      position: relative;
      margin-bottom: 20px;
      font-weight: bold;

      &.active {
        background-color: $multi-steps-form-color;

        ~ .progress-step {
          color: #555;
          background-color: #ccc;

          &::before {
            background-color: #ccc;
          }
        }
      }

      &::before {
        content: "";
        width: 2px;
        height: 20px;
        background-color: $multi-steps-form-color;
        position: absolute;
        top: -20px;
        z-index: 10;
      }

      &:first-child::before {
        display: none;
      }
    }
  }

  section {
    @extend %flex-column;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);

    h2 {
      font-size: 1.6rem;
      color: $multi-steps-form-color;
      margin: 0;
      padding: 20px;
    }

    .input-fields {
      width: 100%;
      text-align: left;

      .input-container {
        @extend %flex-column;
        align-items: flex-start;
        position: relative;
        padding: 30px 20px 20px 20px;
        width: calc(100%-40px);
        max-width: 400px;

        input {
          position: relative;
          width: 100%;
          font-size: 1.35rem;
          outline: none;
          background: transparent;
          box-shadow: none;
          border: none;
          border-bottom: 2px dotted $multi-steps-form-color;

          &:valid + .input-label {
            top: 10px;
            left: 20px;
            font-size: 0.7rem;
            font-weight: normal;
            color: #999;
          }

          &.wrong-input + .input-label {
            color: #b92938;
          }
        }

        .input-label {
          position: absolute;
          top: 30px;
          left: 20px;
          font-size: 1.35rem;
          pointer-events: none;
          transition: 0.2s ease-in-out;
        }
      }
    }

    .action {
      margin: 0;

      button {
        color: #fff;
        border: none;
        background-color: $multi-steps-form-color;
        font-size: 1.35rem;
        padding: 5px 20px;
        cursor: pointer;
        text-transform: uppercase;
        border-radius: 3px;
        margin: 0;
      }
    }
  }

  .animate-in {
    transform-origin: left;
    animation: in 0.6s ease-in-out;
  }

  .animate-out {
    transform-origin: bottom left;
    animation: out 0.6s ease-in-out;
  }

  .animate-wrong {
    animation: wrong 0.6s ease-in-out;
  }

  @keyframes in {
    0% {
      opacity: 0;
      transform: rotateY(90deg);
    }

    100% {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }

  @keyframes out {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    60% {
      transform: rotate(10deg);
    }

    100% {
      transform: translateY(1000px);
    }
  }

  @keyframes wrong {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(40px);
    }
    40% {
      transform: translateX(20px);
    }
    60% {
      transform: translateX(40px);
    }
    80% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0);
    }
  }
}

@media screen and (max-width: 500px) {
  .multi-steps-form {
    article {
      width: 90%;
    }
    section {
      h2 {
        font-size: 1.2rem;
      }

      .input-fields .input-container .input-label {
        font-size: 1rem;
      }

      .action {
        button {
          font-size: 1.1rem;
        }
      }
    }
  }
}
</style>
