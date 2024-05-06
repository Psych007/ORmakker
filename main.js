  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth ,GoogleAuthProvider,signOut , signInWithPopup , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB5fYs7xnT61p7nNmsa_gnuw72cDKFZep4",
    authDomain: "mani-project-24ac7.firebaseapp.com",
    projectId: "mani-project-24ac7",
    storageBucket: "mani-project-24ac7.appspot.com",
    messagingSenderId: "620753306993",
    appId: "1:620753306993:web:c6aad99a329fedae9de2d0"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const user = auth.currentUser;
  auth.languageCode = "en"

  onAuthStateChanged(auth,(user)=>{
    if (user) {
        updateUserProfile(user)
        const uid = user.uid;
        return uid;
    }
    else{
        alert("Create Account & Login")
        window.location.href = "./login.html"
    }
  })

  const  provider = new GoogleAuthProvider()

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click",function() {

    signInWithPopup(auth, provider)
  .then((result) => {
  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "./index.html";
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });


  })

  function updateUserProfile(user){
    const userName = user.displayName
    const userEmail = user.email
    const userProfilePicture = user.photoURL;

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src= userProfilePicture;
  }

  updateUserProfile()