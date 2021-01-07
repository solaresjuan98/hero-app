import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return localStorage.getItem("user") || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
