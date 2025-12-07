import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
