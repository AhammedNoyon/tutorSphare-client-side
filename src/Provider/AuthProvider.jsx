import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google sign in
  const googleProvider = new GoogleAuthProvider();

  //sign in with google
  const signInByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  ///=====>> observer for save current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      if (currenUser?.email) {
        setUser(currenUser);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    signInByGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
