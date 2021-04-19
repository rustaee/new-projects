import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faCopy,
  faPause,
  faPlay,
  faSpinner,
  faStepBackward,
  faStepForward,
  faSync
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faSpinner,
  faCopy,
  faPause,
  faPlay,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faSync,
  faStepForward,
  faStepBackward
);
createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
