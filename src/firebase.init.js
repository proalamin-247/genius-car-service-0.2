// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOeeDpaQR6-CD6PtST_HF6wtELwW63X2s",
    authDomain: "genius-car-services-df871.firebaseapp.com",
    projectId: "genius-car-services-df871",
    storageBucket: "genius-car-services-df871.appspot.com",
    messagingSenderId: "1068828856140",
    appId: "1:1068828856140:web:1a2e71f00bfc08f55d89e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;