import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const axios = useAxiosPublic();


  // create Users
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login users
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out users
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // update profile
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Manage Users
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      if (currentUser) {
        const userInfo = { email: currentUser.email }
        // TODO : save LocalStorage
        axios.post("/jwt", userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
          }
        })
      }
      else {
        localStorage.removeItem("access-token");
        // do something 
        // TODO : Remove token for localStorage
      }
    });
    return () => {
      unSub();
    };
  }, [axios]);

  const authInfo = {
    user,
    loader,
    createUser,
    login,
    logOut,
    updateName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
