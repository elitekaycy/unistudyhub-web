import React, { createContext, useContext, useState, useEffect } from "react";
import { IS_AUTH, USER } from "../utils/constant";
import { getMe, removeToken, setToken } from "../utils/helper";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const login = (token, user) => {
    setToken(token);
    setUser(user);
    setIsAuth(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
    removeToken()
  };

  useEffect(() => {
    getMe()
      .then((response) => {
        setUser(response);
        setIsAuth(true);
      })
      .catch((err) => {
        setUser(null);
        setIsAuth(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
