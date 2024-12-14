import React, { useState } from "react";
import { toast } from "react-toastify";
import women from "../../assets/women.jpg";
import Logo from "../../assets/Logo.svg";

export default function Register({
  onToggle,
  onRegister,
  // fullName,
  // setFullName,
  // email,
  // setEmail,
  // password,
  // setPassword,
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      toast.error("Please fill in all fields.", { position: "top-center" });
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.", {
        position: "top-center",
      });
      return;
    }
    onRegister(fullName, email, password);
  };

  return (
    <div className="flex min-h-screen">
      {/* leftt Side: Register Form */}
      <div className="w-full sm:w-1/2 bg-[#3C5E39] flex flex-col items-center justify-center">
        <div>
          <img src={Logo} alt="Velvety Logo" className="h-100 w-auto mb-4" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onRegister(email, password);
          }}
          className="max-w-md w-full p-8 space-y-6 text-[#3C5E39]"
        >
          <h2 className="text-3xl font-bold text-center text-[#e4ece0] mb-4">
            Sign Up
          </h2>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#e4ece0] text-[#3C5E39] placeholder-[#899f87] focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#e4ece0] text-[#3C5E39] placeholder-[#899f87] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#e4ece0] text-[#3C5E39] placeholder-[#899f87] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#2d4830] text-[#e4ece0] rounded mt-4"
          >
            Sign Up
          </button>
          <p className="text-center mt-4 text-[#e4ece0]">
            Already have an account?{" "}
            <button
              onClick={onToggle}
              className="text-[#e4ece0] text-decoration-none"
            >
              Log In
            </button>
          </p>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/2 bg-[#e4ece0] flex items-center justify-center hidden sm:flex">
        <img
          src={women}
          alt="Login Side Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
