import React, { createContext, useContext, useState, useEffect } from "react";
import { IS_AUTH, USER } from "../utils/constant";
import { setToken } from "../utils/helper";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);


  const login = (token, user) => {
    setUser(user)
    setToken(token)
    setIsAuth(true)
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem(USER);
    localStorage.removeItem(IS_AUTH);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem(USER)
    const savedIsAuth = localStorage.getItem(IS_AUTH);

    if (savedUser && savedIsAuth === "true") {
      setUser(JSON.parse(savedUser));
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };