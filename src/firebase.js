// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0_8sNZAG01FwrXtASeqjsi4l4Z9_IP_U",
    authDomain: "react-colors-eec75.firebaseapp.com",
    projectId: "react-colors-eec75",
    storageBucket: "react-colors-eec75.appspot.com",
    messagingSenderId: "1057961738397",
    appId: "1:1057961738397:web:c9ff2f668a0b3d932ad474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

 