import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8XwU5JndajtmquU9bWuqDAW9Te5D4u4o",
  authDomain: "hangeul-project.firebaseapp.com",
  databaseURL: "https://hangeul-project-default-rtdb.firebaseio.com/",
  projectId: "hangeul-project",
  storageBucket: "hangeul-project.appspot.com",
  messagingSenderId: "798959922690",
  appId: "1:798959922690:web:ab2890c8b6b351569fc11b",
  measurementId: "G-81XX5SDPZ8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
