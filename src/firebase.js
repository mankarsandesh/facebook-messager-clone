import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBOwqHBo7Vgy0SkBn5yE_S5kUxutszjdeY",
    authDomain: "facebook-messager-clone-383d4.firebaseapp.com",
    databaseURL: "https://facebook-messager-clone-383d4.firebaseio.com",
    projectId: "facebook-messager-clone-383d4",
    storageBucket: "facebook-messager-clone-383d4.appspot.com",
    messagingSenderId: "1054276715771",
    appId: "1:1054276715771:web:6fe2ade5e878fa79e59c5e",
    measurementId: "G-4C06537B28"

});

const db = firebaseApp.firestore();
export default db;