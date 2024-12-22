import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import { data } from "react-router-dom";
import axios from "axios";

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
  //======>>>create user
  const registerUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  ///========>>>login user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  ///========>>>update profile
  const manageUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  ///========>>sign out
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  ///========>> observer for save current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currenUser) => {
      setUser(currenUser);
      if (currenUser?.email) {
        const email = currenUser?.email;
        const { data } = axios.post("http://localhost:5000/jwt", email, {
          withCredentials: true,
        });
        setLoading(false);
      } else {
        const { data } = axios.post(
          "http://localhost:5000/jwt/logout",
          {},
          {
            withCredentials: true,
          }
        );

        setLoading(false);
      }
      ////======put in the right place
    });
    return () => {
      unSubscribe();
    };
  }, []);
  ///======>>>> context value
  const authInfo = {
    user,
    loading,
    signInByGoogle,
    registerUpUser,
    signInUser,
    manageUserProfile,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
