import React, { useState } from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Set body background color */}
      <style>{`body { background-color: #d9d9d9; }`}</style>

      <header className="bg-[#3C5E39] shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Velvety Logo" className="h-10 w-auto" />
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="text-[#ebefe7] block md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navbar for desktop */}
          <nav className="hidden md:flex space-x-6 text-[#ebefe7] ">
            <a href="#home" className="flex items-center hover:text-green-400">
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
              </svg>
              <span>Home</span>
            </a>
            <a href="#about" className="flex items-center hover:text-green-400">
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>About</span>
            </a>
            <a
              href="#contact"
              className="flex items-center hover:text-green-400"
            >
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
              </svg>
              <span>Contact</span>
            </a>
            <a href="#cart" className="flex items-center hover:text-green-400">
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 4v1h11l1.5 9H9.9L8.3 4H7zm2-2h2v2H9V2zm1 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span>Cart</span>
            </a>
            <a href="#login" className="flex items-center hover:text-green-400">
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>

              <span>Login</span>
            </a>
          </nav>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="fixed top-0 right-0 w-64 bg-[#3C5E39] h-full shadow-md p-6 z-30">
            {/* Close button */}
            <button className="text-[#ebefe7] mb-4" onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Mobile Navbar */}
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
                </svg>
                Home
              </a>
              <a
                href="#about"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                About
              </a>
              <a
                href="#contact"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
                </svg>
                Contact
              </a>
              <a
                href="#cart"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4v1h11l1.5 9H9.9L8.3 4H7zm2-2h2v2H9V2zm1 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                Cart
              </a>
              <a
                href="#login"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                Login
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
