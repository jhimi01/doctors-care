import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setloader] = useState(true);


  // signup with email and password
  const signupEmail = (email, password)=>{
    setloader(true)
   return createUserWithEmailAndPassword(auth, email, password)
  }

  
  // login with email and password
  const loginWithEmail = (email, password)=>{
    setloader(true)
   return signInWithEmailAndPassword(auth, email, password)
  }

  
  // login with google popup
  const logingoogle = ()=>{
    setloader(true)
   return signInWithPopup(auth, googleprovider)
  }

  
  // logout
  const logout = ()=>{
    setloader(true)
    return signOut(auth)
  }

  // updatePtofile
  const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }


  // user
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
     setUser(currentUser)
     console.log('current user', currentUser)
     setloader(false)
    })
    return () =>{
      return unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loader,
    signupEmail,
    loginWithEmail,
    logingoogle,
    logout,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
