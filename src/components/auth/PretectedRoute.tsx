// src/components/auth/ProtectedRoute.tsx
import { JSX } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = (): boolean => {
  return !!sessionStorage.getItem("user"); // Or check your auth context/token
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
