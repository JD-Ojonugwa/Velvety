import React, { useState } from "react";
import { toast } from "react-toastify";
import natural from "../../assets/natural.jpg";
import Logo from "../../assets/Logo.svg";

export default function Login({
  onToggle,
  onLogin,
  // email,
  // setEmail,
  // password,
  // setPassword,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.", { position: "top-center" });
      return;
    }
    onLogin(email, password);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Image */}
      <div className="w-1/2 bg-[#e4ece0] flex items-center justify-center hidden sm:flex">
        <img
          src={natural}
          alt="Login Side Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full sm:w-1/2 bg-[#3C5E39] flex flex-col items-center justify-center min-h-screen sm:min-h-0">
        <div>
          <img src={Logo} alt="Velvety Logo" className="h-100 w-auto mb-4" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full p-8  space-y-6  text-[#3C5E39]"
        >
          <h2 className="text-3xl font-bold text-center text-[#e4ece0] mb-4">
            Log In
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#e4ece0] text-[#3C5E39] placeholder-[#899f87] focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#e4ece0] text-[#3C5E39] placeholder-[#899f87] focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#2d4830] text-[#e4ece0] text-lg rounded mt-4"
          >
            Log In
          </button>
          <p className="text-center mt-4 text-[#e4ece0]">
            Don’t have an account?{" "}
            <button
              onClick={onToggle}
              className="text-[#e4ece0] text-decoration-none"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
