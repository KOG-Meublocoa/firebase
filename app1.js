import { initializeApp } from "htps://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "htttps://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyClIYVxneZxm3qXk8wfBDj2z42QLbwQsn4",
  authDomain: "khoa-jsi.firebaseapp.com",
  projectId: "khoa-jsi",
  storageBucket: "khoa-jsi.appspot.com",
  messagingSenderId: "443013244157",
  appId: "1:443013244157:web:548910291d4e767c28ca94",
  measurementId: "G-K38BHVKRDR",
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const analytics = firebase.auth(app);

const SignUp =document.getElementById("SignUp");
SignUp.addEventListener("click",function() {

  signUp()
})
console.log(SignUp);

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const auth = getAuth();
    signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("đăng ký thành công" + user.email);

      window.location.href ="index2.html";
    })
    .catch((error) => {
      console.error("Lỗi đăng ký", error.message);
      var errormessage = error.message;
      errormessage.textContent = errormessage;
    });
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showUserInfo(user);
    })
    .catch((error) => {
      console.error("Error signing up:", error.message);
    });
}

function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log("Signed out successfully");
      hideUserInfo();
    })
    .catch((error) => {
      console.error("Error signing out:", error.message);
    });
}

function showUserInfo(user) {
  document.getElementById("user-email").textContent = `Welcome, ${user.email}!`;
  document.getElementById("login-form").style.display = "none";
  document.getElementById("user-info").style.display = "block";
}

function hideUserInfo() {
  document.getElementById("user-email").textContent = "";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("user-info").style.display = "none";
}
