// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGMMIzPVEH1hJrlQ2rXFOEnPueuZ9Nrdk",
  authDomain: "fullstack-883b0.firebaseapp.com",
  projectId: "fullstack-883b0",
  storageBucket: "fullstack-883b0.appspot.com",
  messagingSenderId: "839136663470",
  appId: "1:839136663470:web:9632bfa10269ea6e521a3f",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
