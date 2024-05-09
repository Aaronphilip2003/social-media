// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZYlzP-JqbBti8iR0oXy3mdvW0beurxFk",
  authDomain: "aaron-blog-124fd.firebaseapp.com",
  projectId: "aaron-blog-124fd",
  storageBucket: "aaron-blog-124fd.appspot.com",
  messagingSenderId: "1057684200105",
  appId: "1:1057684200105:web:3be666e917f776385267b8",
  measurementId: "G-CT0HNRW0NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);