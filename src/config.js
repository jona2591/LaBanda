import firebase from "firebase";
var Config = {
    apiKey: "AIzaSyBTFEFpRVwMlqr74Urv9hneLMertzZmF1E",
    authDomain: "mensajes-3b83c.firebaseapp.com",
    databaseURL: "https://mensajes-3b83c.firebaseio.com",
    projectId: "mensajes-3b83c",
    storageBucket: "mensajes-3b83c.appspot.com",
    messagingSenderId: "52206496285",
    appId: "1:52206496285:web:efb087f42c2fcf9485f4f4",
    measurementId: "G-1241H3KP8H"
  };

export const app = firebase.initializeApp(Config);
export const db = app.database();
export const PostRef = db.ref("Posts");