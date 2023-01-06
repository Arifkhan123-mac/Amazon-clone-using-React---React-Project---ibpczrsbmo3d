// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAAVRFwagN20a0BhdSut2szBCeq5Pd7XfA",
    authDomain: "challange-fb827.firebaseapp.com",
    projectId: "challange-fb827",
    storageBucket: "challange-fb827.appspot.com",
    messagingSenderId: "128146940828",
    appId: "1:128146940828:web:7abdcd3c5af223030ede59",
    measurementId: "G-FZYCM7Z0Q6"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
