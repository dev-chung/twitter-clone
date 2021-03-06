import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBh1vZHcu-E2ZEvOUX5gfublwP31MGaeY",
    authDomain: "nwitter-bcbd0.firebaseapp.com",
    projectId: "nwitter-bcbd0",
    storageBucket: "nwitter-bcbd0.appspot.com",
    messagingSenderId: "429335892683",
    appId: "1:429335892683:web:0e226e544f9d5da943014e"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();