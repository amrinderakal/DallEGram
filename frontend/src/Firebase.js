import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, initializeAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
