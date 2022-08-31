import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBtlV5x1VUqPXycwW2G5ohMIJAqNycJeA",
    authDomain: "chatbox-90843.firebaseapp.com",
    projectId: "chatbox-90843",
    storageBucket: "chatbox-90843.appspot.com",
    messagingSenderId: "758480244766",
    appId: "1:758480244766:web:a71e0ffe8ce565bbf69e0f",
    measurementId: "G-NZZSJXM6YL"
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);