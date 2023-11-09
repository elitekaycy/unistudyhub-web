import React, { useEffect } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, isAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getLocation = window.location.pathname.substring(1);
    if (getLocation === "login" && user) navigate("/feed", { replace: true });
    if (!user) navigate("/login", { replace: true });
    console.log("is it depth reloading!!!!");
  }, [user]);

  return <div>{children}</div>;
}

export default ProtectedRoute;
