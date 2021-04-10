import firebaseClient from "firebase/app";
import "firebase/firestore";

let db: firebaseClient.firestore.Firestore;

if (!firebaseClient.apps.length) {
  const firebase = firebaseClient.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  });

  db = firebase.firestore();

  if (process.env.NODE_ENV === "development") {
    db.useEmulator("localhost", 8080);
  } else if (process.env.NODE_ENV === "test") {
    db.useEmulator("localhost", 8080);
  }
} else {
  const firebase = firebaseClient.app();

  db = firebase.firestore();
}

export const Firestore = db;
