import React, { useContext, useState, useEffect, useCallback } from "react";
import { auth } from "../Firebase";
import { useDatabase } from "./DatabaseContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uid, setUID] = useState(true);
  const {
    getImgagesForTheFeed,
    getUser,

    getImagesForProfile,
  } = useDatabase();

  // calls Firebase to sign a user uo
  function signup(email, password) {
    const signup = createUserWithEmailAndPassword(auth, email, password);
    return signup;
  }

  // calls Firebase to login a user
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // calls Firebase to logout a user
  function logout() {
    return auth.signOut();
  }
  // calls Firebase to help a user reset thier password
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // On render of the webpage, we get the images for the feed, the feed in the profile, and the user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setUID(user.uid);
        getImgagesForTheFeed();
        getUser(user.uid);
        getImagesForProfile(user.uid);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    uid,

    // updateEmail,
    // updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
