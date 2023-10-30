import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, initializeAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "REACT_APP_APIKEY=",
  authDomain: "dallegram-e2cd5.firebaseapp.com",
  databaseURL: "https://dallegram-e2cd5-default-rtdb.firebaseio.com",
  projectId: "dallegram-e2cd5",
  storageBucket: "dallegram-e2cd5.appspot.com",
  messagingSenderId: "440527179786",
  appId: "1:440527179786:web:928e9330dd90e289074ff3",
  measurementId: "G-9TJ4YJM1WB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
