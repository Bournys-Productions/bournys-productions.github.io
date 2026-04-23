// app.js

import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

// test login
signInWithEmailAndPassword(auth, "test@test.com", "password123")
  .then(user => console.log("Logged in:", user.user))
  .catch(err => console.error(err.message));
