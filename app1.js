const firebaseConfig = {
  apiKey: "AIzaSyClIYVxneZxm3qXk8wfBDj2z42QLbwQsn4",
  authDomain: "khoa-jsi.firebaseapp.com",
  projectId: "khoa-jsi",
  storageBucket: "khoa-jsi.appspot.com",
  messagingSenderId: "443013244157",
  appId: "1:443013244157:web:548910291d4e767c28ca94",
  measurementId: "G-K38BHVKRDR"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showUserInfo(user);
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
      });
  }
  
  function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showUserInfo(user);
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
      });
  }
  
  function signOut() {
    auth.signOut()
      .then(() => {
        console.log('Signed out successfully');
        hideUserInfo();
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  }
  
  function showUserInfo(user) {
    document.getElementById('user-email').textContent = `Welcome, ${user.email}!`;
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
  }
  
  function hideUserInfo() {
    document.getElementById('user-email').textContent = '';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
  }
  