import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgigNc0tYWRxFLWPDUEXl8ZueZ1BFS40Q",
    authDomain: "linkedin-a0fb7.firebaseapp.com",
    projectId: "linkedin-a0fb7",
    storageBucket: "linkedin-a0fb7.appspot.com",
    messagingSenderId: "329905871842",
    appId: "1:329905871842:web:5b7daeab1d233fda72b7bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }