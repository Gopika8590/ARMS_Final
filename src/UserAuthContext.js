import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const UserAuthContext = createContext();

export function useUserAuth() {
  return useContext(UserAuthContext);
}

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });


    return () => unsubscribe();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, logIn, signUp, logOut}}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
