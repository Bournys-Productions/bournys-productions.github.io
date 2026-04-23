// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBl8c566I2CJIz_19tXHd-hnt6Wh4QOtM",
  authDomain: "bournys-productions.firebaseapp.com",
  projectId: "bournys-productions",
  storageBucket: "bournys-productions.firebasestorage.app",
  messagingSenderId: "399455632387",
  appId: "1:399455632387:web:e5214c42c8424dd4f6a236",
  measurementId: "G-RKBRH3PRRB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// export so other files can use Firebase
export { auth };
