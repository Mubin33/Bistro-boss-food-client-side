import { createContext, useEffect, useState } from "react";
import auth from "./Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import UseAxiosPublic from "./../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  let [user, setUser] = useState([]);
  let [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

//   
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

//   
  const logoutUser = () => {
    return signOut(auth);
  };

//   
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        const userInfo = { email: user.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false)
          }
        });} else {
        localStorage.removeItem("access-token");
        setLoading(false)
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  let obj = {
    name: "bd",
    registerUser,
    loginUser,
    loading,
    user,
    logoutUser,
    updateUser,
    googleLogin,
  };
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
