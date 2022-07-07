import React from "react";
import { useUserContext } from "../context/userContext";

const Auth = () => {
  const { signInWithGithub } = useUserContext();
  return (
    <div className="container">
      <button onClick={signInWithGithub}> Continue with GitHub </button>
    </div>
  );
};

export default Auth;
