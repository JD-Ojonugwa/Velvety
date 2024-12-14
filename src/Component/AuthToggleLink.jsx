import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Component/firebaseConfig";
import { signOut } from "firebase/auth";

const AuthToggleLink = () => {
  const navigate = useNavigate();
  const isAuthenticated = auth.currentUser; // Check if the user is authenticated

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Log the user out
      navigate("/auth"); // Redirect to the login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return isAuthenticated ? (
    <Link
      to="#"
      className="flex items-center hover:text-green-400"
      onClick={handleLogout}
    >
      <svg
        className="w-5 h-5 mr-2 fill-current"
        fill="#ebefe7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
      <span>Logout</span>
    </Link>
  ) : (
    <Link to="/auth" className="flex items-center hover:text-green-400">
      <svg
        className="w-5 h-5 mr-2 fill-current"
        fill="#ebefe7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
      <span>Login</span>
    </Link>
  );
};

export default AuthToggleLink;
