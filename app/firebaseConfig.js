// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5uzhMYeLohYqhzIyGMoYEFe5KTFvyzPA",
  authDomain: "react-learning-bf604.firebaseapp.com",
  databaseURL: "https://react-learning-bf604-default-rtdb.firebaseio.com",
  projectId: "react-learning-bf604",
  storageBucket: "react-learning-bf604.appspot.com",
  messagingSenderId: "644467792848",
  appId: "1:644467792848:web:dec4038d43b72ebcecf7d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
