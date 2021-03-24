<template>
  <div class="container">
    <div class="github">
      <form @submit.prevent="getUser" class="user-form">
        <input
          type="text"
          class="search"
          v-model="username"
          placeholder="Serach a Githab User"
        />
      </form>
      <main class="main">
        <!-- Loading -->
        <base-loading v-if="loading"></base-loading>
        <!-- End Loading -->
        <div v-else-if="error" class="card">
          <h2>{{ error }}</h2>
        </div>
        <div v-else-if="foundUser" class="card">
          <div>
            <img :src="user.avatar_url" alt="userName" class="avatar" />
          </div>
          <div class="user-info">
            <h2>{{ user.name }}</h2>
            <p>
              {{ user.bio }}
            </p>

            <ul>
              <li>{{ user.followers }} <strong> &nbsp;Followers</strong></li>
              <li>{{ user.following }} <strong> &nbsp;Following</strong></li>
              <li>{{ user.public_repos }} <strong>&nbsp; Repos</strong></li>
            </ul>

            <div class="repos">
              <a
                v-for="repo in userRepos"
                :key="repo.id"
                :href="repo.html_url"
                target="_blank"
                class="repo"
                >{{ repo.name }}</a
              >
            </div>
          </div>
        </div>
        <div v-else class="card">
          <h2>Enter a name to see the user information</h2>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import BaseLoading from "@/components/ui/BaseLoading.vue";
export default {
  components: { "base-loading": BaseLoading },
  data() {
    return {
      APIURL: "https://api.github.com/users/",
      foundUser: false,
      error: null,
      username: null,
      user: null,
      userRepos: null,
      loading: false
    };
  },
  methods: {
    async getUser() {
      try {
        this.loading = true;
        const { data } = await this.axios.get(this.APIURL + this.username);
        this.error = null;
        this.foundUser = true;
        this.user = data;
        this.getRepos();
      } catch (err) {
        this.error = "User not found";
        this.loading = false;
      }
    },
    async getRepos() {
      try {
        const { data } = await this.axios.get(
          this.APIURL + this.username + "/repos?sort=created"
        );
        this.userRepos = data;
        this.loading = false;
      } catch (err) {
        this.error = "Problem fetching Repos";
        this.loading = false;
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #1d1e2c;
  color: #f7ebec;
  @extend %flex-column;
}
.github {
  width: 80%;
  max-width: 1000px;
  margin: auto;
  font-family: $font-titi;

  .main {
    position: relative;
  }

  .user-form {
    input {
      width: 100%;
      display: block;
      background-color: #59656f;
      border: none;
      border-radius: 10px;
      color: inherit;
      padding: 1rem;
      margin-bottom: 2rem;
      font-family: inherit;
      font-size: 1rem;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 15px 40px rgba(0, 0, 0, 0.1);

      &::placeholder {
        color: #ddbdd5;
      }
    }
  }

  .card {
    width: 100%;
    border-radius: 20px;
    background-color: #59656f;
    display: flex;
    text-align: left;
    padding: 3rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 15px 40px rgba(0, 0, 0, 0.1);

    .avatar {
      border-radius: 50%;
      border: 10px solid #1d1e2c;
      height: 150px;
      width: 150px;
    }

    .user-info {
      margin-left: 2rem;
      min-width: 50%;

      h2 {
        margin-bottom: 1rem;
      }

      ul {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        margin-bottom: 1rem;

        li {
          display: flex;
          align-items: center;

          strong {
            font-size: 0.9rem;
            font-weight: normal;
          }
        }
      }

      p {
        margin: 1rem 0;
      }

      .repo {
        color: #ac9fbb;
        background-color: #1d1e2c;
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        margin: 0.25rem 0.5rem;
        display: inline-block;
      }
    }
  }
}

@media (max-width: 700px) {
  .github .card {
    flex-direction: column;
    align-items: center;
  }
}
</style>
