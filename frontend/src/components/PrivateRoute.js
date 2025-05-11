import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Store role in localStorage during login

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(userRole)) {
    // If role is not allowed, redirect to login
    return <Navigate to="/" />;
  }

  return children; // Render the protected component
};

export default PrivateRoute;