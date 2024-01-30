import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./App";

export const Private = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(`in Private ${isLoggedIn}`);
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
};
