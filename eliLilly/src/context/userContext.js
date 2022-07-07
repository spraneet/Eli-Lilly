import { createContext, useContext, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
export const UserContext = createContext({});
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGithub = () => {
    setLoading(true);
    setError("");
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => setName(res.user.reloadUserInfo.screenName))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const logoutUser = () => {
    signOut(auth);
  };
  const contextValue = {
    user,
    name,
    loading,
    error,
    logoutUser,
    signInWithGithub,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
