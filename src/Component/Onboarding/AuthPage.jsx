import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import Register from "./Register";
import Login from "./Login";
import { toast, ToastContainer } from "react-toastify";

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleToggle = () => setIsLogin(!isLogin);

//   const handleLogin = () => {
//     // Add logic for login
//     console.log("Logged in with:", email, password);
//   };

//   const handleRegister = () => {
//     // Add logic for registration
//     console.log("Registered with:", fullName, email, password);
//     setIsLogin(true);
//   };
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  // Toggle between Login and Register
  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  // Handle user registration
  const handleRegister = async (email, password) => {
    if (!email || !password) {
      toast.error("Email and password are required", {
        position: "top-center",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration successful! You can now log in.", {
        position: "top-center",
      });
      setIsLogin(true);
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`, {
        position: "top-center",
      });
    }
  };

  // Handle user login
  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!", { position: "top-center" });
      // Redirect or navigate to the home page here
      navigate("/home");
    } catch (error) {
      toast.error(`Login failed: ${error.message}`, { position: "top-center" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full">
        {isLogin ? (
          <Login
            onToggle={handleToggle}
            onLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <Register
            onToggle={handleToggle}
            onRegister={handleRegister}
            fullName={fullName}
            setFullName={setFullName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthPage;
