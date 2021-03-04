import firebaseClient from "firebase/app";
import "firebase/firestore";

let firebase: firebaseClient.app.App;

if (!firebaseClient.apps.length) {
  firebase = firebaseClient.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });
} else {
  firebase = firebaseClient.app();
}

let db = firebase.firestore();

// if (process.env.NODE_ENV === "development") {
//   db.settings({
//     host: "localhost:8080",
//     ssl: false,
//   });
// }

export const Firestore = db;
