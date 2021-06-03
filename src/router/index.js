import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/paint",
    name: "Paint",
    component: () => import("@/views/Paint.vue"),
    meta: {
      title: "Painting App"
    }
  },
  {
    path: "/github",
    name: "/Git",
    component: () => import("@/views/GithubProfile.vue"),
    meta: {
      title: "Github user search"
    }
  },
  {
    path: "/password-generator",
    name: "Password",
    component: () => import("@/views/PasswordGenerator.vue"),
    meta: {
      title: "Password generated"
    }
  },
  {
    path: "/hoverboard",
    name: "Hover",
    component: () => import("@/views/HoverBoard.vue"),
    meta: {
      title: "Hover Board"
    }
  },
  {
    path: "/todo",
    name: "Todo",
    component: () => import("@/views/Todo.vue"),
    meta: {
      title: "Todo List"
    }
  },
  {
    path: "/cloud",
    name: "Cloud",
    component: () => import("@/views/Cloud.vue"),
    meta: {
      title: "Cloud"
    }
  },
  {
    path: "/weatherapp",
    name: "Weather",
    component: () => import("@/views/WeatherApp.vue"),
    meta: {
      title: "Weather App"
    }
  },
  {
    path: "/tetris",
    name: "Tetris",
    component: () => import("@/views/games/Tetris.vue"),
    meta: {
      title: "Tetris"
    }
  },
  {
    path: "/fallgame",
    name: "Fall",
    component: () => import("@/views/games/FallGame.vue"),
    meta: {
      title: "Fall Game"
    }
  },
  {
    path: "/musicapp",
    name: "MusicApp",
    component: () => import("@/views/MusicApp.vue"),
    meta: {
      title: "Music App"
    }
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/views/FireChat.vue"),
    meta: {
      title: "Vue Chat"
    }
  },
  {
    path: "/multistepsform",
    name: "MultiStepsForm",
    component: () => import("@/views/MultiStepsForm.vue"),
    meta: {
      title: "Multi Steps Form"
    }
  },
  {
    path: "/css-animations",
    name: "Animations",
    component: () => import("@/views/CssAnimations.vue"),
    meta: {
      title: "CSS Animations"
    }
  },
  {
    path: "/coffee-cup",
    name: "Coffee",
    meta: {
      title: "Coffee Cup"
    },
    component: () => import("@/views/animations/CoffeeCup.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

//To change the page title in each view
router.beforeEach(to => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }
});

export default router;
