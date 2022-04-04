import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { authState } = useAuth();

  if (authState.loggedIn) {
    return children;
  } else {
    return <Navigate to={"/auth"} />;
  }
};

export default PrivateRoutes;
