import firebaseClient from "firebase/app";
import "firebase/firestore";

let db: firebaseClient.firestore.Firestore;

if (!firebaseClient.apps.length) {
  const firebase = firebaseClient.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });

  db = firebase.firestore();

  if (process.env.NODE_ENV === "development") {
    db.settings({
      host: "localhost:8080",
      ssl: false,
    });
  }
} else {
  const firebase = firebaseClient.app();

  db = firebase.firestore();
}

export const Firestore = db;
