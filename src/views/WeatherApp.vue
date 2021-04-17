<template>
  <div class="bg" :class="mode">
    <div
      class="weather-app"
      :style="{
        'background-image': `url('../weather/${divClass}.jpg')`
      }"
    >
      <!-- City Search -->
      <form @submit.prevent="changeLocation()">
        <input type="text" v-model="city" placeholder="Search city" />
      </form>
      <div class="container" :class="divClass">
        <!-- Error -->
        <div class="error" v-if="error">{{ error }}</div>

        <!-- Information -->
        <div class="info" v-else-if="info.temp">
          <img :src="info.icon" alt="" srcset="" id="weather-icon" />
          <div class="location" id="location">{{ info.place }}</div>
          <div class="date">{{ currentDate }}</div>
          <div class="weather">
            <div class="temp">
              <div class="c">{{ info.temp.toFixed(0) }} °C</div>
              <div class="min-max">
                ( {{ info.max.toFixed(0) }}° / {{ info.min.toFixed(0) }}°)
              </div>
            </div>
            <div class="circle"></div>
            <!-- <div class="f">{{ ((info.temp * 9) / 5 + 32).toFixed(0) }} °F</div> -->
            <div class="temp">
              <div class="desc">{{ info.description }}</div>
              <div class="feels">
                Feels like {{ info.feelsLike.toFixed(0) }}°
              </div>
            </div>
          </div>
          <div class="info">
            <h4>
              Sunrise:
              <span class="sunrise">{{
                info.sunrise.toLocaleTimeString()
              }}</span>
            </h4>
            <h4>
              Sunset:
              <span class="sunset">{{ info.sunset.toLocaleTimeString() }}</span>
            </h4>
          </div>
        </div>
        <div v-else>Enter your city name to see the weather information</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      API: "a517dd7f3dacfc2bb943ba46377f7b2e", //OpenWeather API key
      BaseUrl: "https://api.openweathermap.org/data/2.5/weather?",
      IconUrl: "https://openweathermap.org/img/wn/",
      latitude: null,
      longitude: null,
      error: null,
      city: "",
      divClass: "", //Styling for diffrent weather(.rain , .snow , ...)
      mode: "day",
      info: {
        temp: null,
        feelsLike: null,
        min: null,
        max: null,
        humidity: null,
        place: null,
        description: null,
        icon: null,
        sunrise: null,
        sunset: null
      },
      weatherStyle: {
        "01d": "clear-sky",
        "02d": "few-clouds",
        "03d": "scattered-clouds",
        "04d": "broken-clouds",
        "09d": "shower-rain",
        "10d": "rain",
        "11d": "thunderstorm",
        "13d": "snow",
        "50d": "mist",
        "01n": "clear-sky-n",
        "02n": "few-clouds-n",
        "03n": "scattered-clouds-n",
        "04n": "broken-clouds-n",
        "09n": "shower-rain-n",
        "10n": "rain-n",
        "11n": "thunderstorm-n",
        "13n": "snow-n",
        "50n": "mist-n"
      }
    };
  },
  methods: {
    setCoords() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          const url = `${this.BaseUrl}lat=${this.latitude}&lon=${this.longitude}&appid=${this.API}&units=metric`;
          this.fetchData(url);
        });
      }
    },
    async fetchData(url) {
      try {
        this.error = null;
        const { data } = await this.axios.get(url);
        this.info.temp = data.main.temp;
        this.info.min = data.main.temp_min;
        this.info.max = data.main.temp_max;
        this.info.feelsLike = data.main.feels_like;
        this.info.place = data.name;
        this.info.description = data.weather[0].description;
        const icon = data.weather[0].icon;
        this.info.icon = `${this.IconUrl + icon}@2x.png`;
        this.divClass = this.weatherStyle[icon];
        icon.substr(icon.length - 1) == "d"
          ? (this.mode = "day")
          : (this.mode = "night");
        this.info.sunrise = new Date(data.sys.sunrise * 1000);
        this.info.sunset = new Date(data.sys.sunset * 1000);
      } catch (err) {
        this.error = "Couldn't find the location.";
      }
    },
    changeLocation() {
      if (this.city.trim()) {
        const url = `${this.BaseUrl}q=${this.city}&appid=${this.API}&units=metric`;
        this.fetchData(url);
        this.city = "";
      }
    }
  },
  computed: {
    currentDate() {
      const today = new Date();
      return (
        today.toLocaleString("en-us", { weekday: "long" }) +
        " - " +
        today.toLocaleString("en-us", { dateStyle: "long" })
      );
    }
  },
  mounted() {
    this.setCoords();
  }
};
</script>
<style lang="scss" scoped>
.weather-app {
  width: 100vw;
  min-height: 100vh;
  font-family: $font-lora;
  background-size: cover;
  opacity: 0.9;
  @extend %flex-column;

  form {
    width: 100%;

    input {
      padding: 0.5rem 1rem;
      width: 50%;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      background: rgba(255, 255, 255, 0.8);
      font-family: inherit;
      color: rgb(90, 90, 90);
      font-size: 1.25rem;

      &::placeholder {
        color: rgb(105, 104, 104);
      }
    }
  }

  .container {
    background: rgba(255, 255, 255, 0.7);
    padding: 50px;
    max-width: 100%;
    border-radius: 10%;
    margin-top: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      rgba(56, 116, 165, 0.5),
      rgba(255, 255, 255, 0.1)
    );

    .info {
      @extend %flex-column;
    }

    .weather {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      font-size: 1.5rem;

      .temp {
        @extend %flex-column;

        .c {
          font-size: 2rem;
        }
      }

      .min-max {
        font-size: 1rem;
        margin: 0 10px;
      }

      .feels {
        font-size: 1rem;
        margin: 10px 0;
      }
    }

    .location {
      font-size: 3rem;
      font-weight: 800;
      font-style: italic;
    }

    .desc {
      font-size: 1.25rem;
      text-transform: capitalize;
      margin-top: 10px;
    }

    .circle {
      background-color: black;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 0 1rem;
    }
  }
}
.bg {
  width: 100vw;
  min-height: 100vh;
  background: rgb(86, 178, 206);
  &.night {
    background: #000;

    .container {
      background-image: linear-gradient(
        rgba(2, 2, 2, 0.8),
        rgba(192, 192, 192, 0.6)
      );
    }

    form input {
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
