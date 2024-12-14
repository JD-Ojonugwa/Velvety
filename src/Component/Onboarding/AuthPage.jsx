// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import Register from "./Register";
// import Login from "./Login";
// import { toast, ToastContainer } from "react-toastify";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");

//   const navigate = useNavigate();

//   // Toggle between Login and Register
//   const handleToggle = () => {
//     setIsLogin((prev) => !prev);
//   };

//   // Handle user registration
//   const handleRegister = async (email, password) => {
//     if (!email || !password) {
//       toast.error("Email and password are required", {
//         position: "top-center",
//       });
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       toast.success("Registration successful! You can now log in.", {
//         position: "top-center",
//       });
//       setIsLogin(true);
//     } catch (error) {
//       toast.error(`Registration failed, try again`, {
//         position: "top-center",
//       });
//     }
//   };

//   // Handle user login
//   const handleLogin = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Login successful!", { position: "top-center" });
//       // Redirect or navigate to the home page here
//       navigate("/home");
//     } catch (error) {
//       toast.error(`Login failed, Sign up first`, {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full">
//         {isLogin ? (
//           <Login
//             onToggle={handleToggle}
//             onLogin={handleLogin}
//             email={email}
//             setEmail={setEmail}
//             password={password}
//             setPassword={setPassword}
//           />
//         ) : (
//           <Register
//             onToggle={handleToggle}
//             onRegister={handleRegister}
//             fullName={fullName}
//             setFullName={setFullName}
//             email={email}
//             setEmail={setEmail}
//             password={password}
//             setPassword={setPassword}
//           />
//         )}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import Register from "./Register";
import Login from "./Login";
import { toast, ToastContainer } from "react-toastify";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the intended route or fallback to home
  const from = location.state?.from?.pathname || "/";

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
      toast.error(`Registration failed, try again`, {
        position: "top-center",
      });
    }
  };

  // Handle user login
  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!", { position: "top-center" });
      // Redirect to the intended page or home if no redirection path is stored
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Login failed, Sign up first", {
        position: "top-center",
      });
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
