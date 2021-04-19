<template>
  <div class="music-app">
    <header>
      <h1>My Music</h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title">
          {{ current.title }} - <span>{{ current.artist }}</span>
        </h2>

        <div class="controls">
          <button class="prev" @click="prevSong">
            <font-awesome-icon icon="step-backward" />
          </button>
          <button class="play" @click="playSong" v-if="!isPlaying">
            <font-awesome-icon icon="play" />
          </button>
          <button class="pause" @click="pauseSong" v-else>
            <font-awesome-icon icon="pause" />
          </button>
          <button class="next" @click="nextSong">
            <font-awesome-icon icon="step-forward" />
          </button>
        </div>
      </section>
      <section class="playlist">
        <button
          v-for="(song, index) in songs"
          :key="song.src"
          @click="playSong(index)"
          :class="song.src == current.src ? 'song playing' : 'song'"
        >
          {{ song.title }} - {{ song.artist }}
        </button>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: {},
      isPlaying: false,
      index: 0,
      songs: [
        {
          title: "Dancing Baby",
          artist: "David Renda",
          src: require("../assets/music/30sec-2020-05-22_-_Dancing_Baby_-_www.FesliyanStudios.com_David_Renda.mp3")
        },
        {
          title: "Save the hostage",
          artist: "David Fesliyan",
          src: require("../assets/music/2018-03-03_-_Save_The_Hostage_-_David_Fesliyan.mp3")
        },
        {
          title: "Crazy Drummer",
          artist: "David Fesliyan",
          src: require("../assets/music/2018-05-31_-_Crazy_Drummer_-_David_Fesliyan.mp3")
        },
        {
          title: "Eye Laugh",
          artist: "David Renda",
          src: require("../assets/music/2019-01-27_-_Eye_Laugh_-_David_Renda-www.fesliyanstudios.com - Copy.mp3")
        },
        {
          title: "Funny Dance",
          artist: "David Renda",
          src: require("../assets/music/2019-02-12_-_Upbeat_Funny_Dance_-_www.fesliyanstudios.com_-_David_Renda.mp3")
        },
        {
          title: "HomeWork",
          artist: "David Fesliyan",
          src: require("../assets/music/2019-06-12_-_Homework_-_David_Fesliyan.mp3")
        },
        {
          title: "Supper Spiffy",
          artist: "David Fesliyan",
          src: require("../assets/music/2019-06-17_-_Super_Spiffy_-_David_Fesliyan.mp3")
        },
        {
          title: "Champagne at sunset",
          artist: "Steve Oxen",
          src: require("../assets/music/2020-05-27_-_Champagne_at_Sunset_-_www.FesliyanStudios.com_Steve_Oxen.mp3")
        },
        {
          title: "Play Date",
          artist: "David Renda",
          src: require("../assets/music/2020-05-29_-_Play_Date_-_www.FesliyanStudios.com_David_Renda.mp3")
        },
        {
          title: "Happy Upbeat Acoustic",
          artist: "AShamaluevMusic",
          src: require("../assets/music/Happy Upbeat Acoustic - AShamaluevMusic.mp3")
        }
      ],
      player: new Audio()
    };
  },
  methods: {
    playSong(index) {
      if (typeof index !== "object") {
        this.index = index;
        this.current = this.songs[index];
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
      this.player.addEventListener(
        "ended",
        function() {
          this.index++;
          if (this.index > this.songs.length - 1) this.index = 0;

          this.current = this.songs[this.index];
          this.playSong(this.index);
        }.bind(this)
      );
    },
    pauseSong() {
      this.player.pause();
      this.isPlaying = false;
    },
    nextSong() {
      this.index++;
      if (this.index > this.songs.length - 1) this.index = 0;

      this.current = this.songs[this.index];
      this.playSong(this.index);
    },
    prevSong() {
      this.index--;
      if (this.index < 0) this.index = this.songs.length - 1;

      this.current = this.songs[this.index];
      this.playSong(this.index);
    }
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
};
</script>
<style lang="scss" scoped>
.music-app {
  width: 100vw;
  min-height: 100vh;
  background-color: #efe9e7;
  font-family: $font-titi;

  header {
    display: flex;
    padding: 15px;
    background-color: #111344;
    color: #fff;
    @extend %flex-row;
    font-family: $font-lora;
  }

  .song-title {
    text-transform: uppercase;
    margin: 20px 0;
  }

  .controls {
    margin: 10px 0;

    button {
      border: none;
      width: 30px;
      height: 30px;
      margin: 5px;
      color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }

    .play,
    .pause {
      background: #52154e;
      border-radius: 15px;
      width: 50px;
      height: 40px;
    }

    .next,
    .prev {
      background: #d1603d;
    }
  }

  .playlist {
    width: 400px;
    @extend %flex-column;
    margin: auto;

    button {
      width: 100%;
      padding: 10px 0;
      margin: 5px 0;
      background-color: #71816d;
      border: 1px solid #5e6b5b;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      cursor: pointer;

      &.playing {
        background-color: #52154e;
        border: 1px solid #3d103a;
        color: #efe9e7;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .music-app .playlist {
    width: 95%;

    button {
      margin: 2px;
    }
  }
}
</style>
