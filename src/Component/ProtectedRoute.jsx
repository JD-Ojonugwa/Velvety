import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Component/firebaseConfig";

const ProtectedRoute = ({ children }) => {
  // Check if a user is logged in
  const isAuthenticated = !!auth.currentUser;

  // Get the current location
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to the auth page if not authenticated
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;
