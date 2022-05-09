// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqTfsL5Avj1M46gvBOFrcag9kIXZnkesw",
    authDomain: "warehouse-23935.firebaseapp.com",
    projectId: "warehouse-23935",
    storageBucket: "warehouse-23935.appspot.com",
    messagingSenderId: "980116679765",
    appId: "1:980116679765:web:17272d17f011da71c7f8dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;