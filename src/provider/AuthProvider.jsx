/* eslint-disable react/prop-types */
import { createContext } from "react";
export const AuthContext = createContext(null);

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }

    const authInfo = {
      googleLogin,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;