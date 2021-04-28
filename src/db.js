import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBPhFR16FhM8LrI9O_MLxzfIB7fOyp6lco",
  authDomain: "practice-vue-c4510.firebaseapp.com",
  projectId: "practice-vue-c4510",
  storageBucket: "practice-vue-c4510.appspot.com",
  messagingSenderId: "829586865677",
  appId: "1:829586865677:web:2ec9f106c5b2d1ac429f44"
};

const db = firebase.initializeApp(config);
export default db;
