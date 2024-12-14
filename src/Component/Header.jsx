import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import AuthToggleLink from "./AuthToggleLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle the sidebar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <>
      {/* Set body background color */}
      <style>{`body { background-color: #d9d9d9; }`}</style>

      <header
        className={`${
          isSticky ? "bg-[#3C5E39]" : "bg-[#3C5E39]"
        } shadow-md transition-colors duration-300 sticky top-0 z-50`}
      >
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
          <nav className="hidden md:flex space-x-6 text-[#ebefe7] cursor-pointer">
            <Link
              to="home"
              className="flex items-center hover:text-green-400"
              smooth={true}
              offset={0}
              duration={300}
            >
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
              </svg>
              <span>Home</span>
            </Link>

            <Link
              to="about"
              className="flex items-center hover:text-green-400"
              smooth={true}
              offset={-80}
              duration={300}
            >
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <span>About</span>
            </Link>

            <Link
              to="product"
              className="flex items-center hover:text-green-400"
              smooth={true}
              offset={-120}
              duration={300}
            >
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm2 5a2 2 0 114 0h2a2 2 0 114 0h1v2H5V7h1a2 2 0 014 0h2a2 2 0 114 0h1V7H8zm-1 9v-6h10v6H7z" />
              </svg>

              <span>Product</span>
            </Link>

            <Link
              to="contact"
              className="flex items-center hover:text-green-400"
              smooth={true}
              offset={-200}
              duration={300}
            >
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2L12 11.4 5.4 6h13.2zM4 18v-9.5l7.6 5.7a1 1 0 001.2 0L20 8.5V18H4z" />
              </svg>

              <span>Contact</span>
            </Link>
            <Link
              to="cart"
              className="flex items-center hover:text-green-400"
              smooth={true}
              offset={-200}
              duration={300}
            >
              <svg
                className="w-5 h-5 mr-2 fill-current"
                fill="#ebefe7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 4v1h11l1.5 9H9.9L8.3 4H7zm2-2h2v2H9V2zm1 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span>Cart</span>
            </Link>

            {/* <Link
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
            </Link> */}

            <AuthToggleLink />
          </nav>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="fixed top-0 right-0 w-80 bg-[#899f87] h-full shadow-md p-6 z-30">
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
            <nav className="flex flex-col space-y-4 cursor-pointer">
              <Link
                to="home"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
                smooth={true}
                offset={0}
                duration={300}
                onClick={toggleMenu}
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
              </Link>
              <Link
                to="about"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
                smooth={true}
                offset={-80}
                duration={300}
                onClick={toggleMenu}
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
              </Link>
              <Link
                to="product"
                className="text-[#ebefe7] flex items-center hover:text-green-400"
                smooth={true}
                offset={-150}
                duration={300}
                onClick={toggleMenu}
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm2 5a2 2 0 114 0h2a2 2 0 114 0h1v2H5V7h1a2 2 0 014 0h2a2 2 0 114 0h1V7H8zm-1 9v-6h10v6H7z" />
                </svg>

                <span>Product</span>
              </Link>
              <Link
                to="services"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
                smooth={true}
                offset={-200}
                duration={300}
                onClick={toggleMenu}
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
                </svg>
                Services
              </Link>
              <Link
                to="contact"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
                smooth={true}
                offset={-200}
                duration={300}
                onClick={toggleMenu}
              >
                <svg
                  className="w-5 h-5 mr-2 fill-current"
                  fill="#ebefe7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2L12 11.4 5.4 6h13.2zM4 18v-9.5l7.6 5.7a1 1 0 001.2 0L20 8.5V18H4z" />
                </svg>
                Contact
              </Link>
              <Link
                to="cart"
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
              </Link>
              <Link
                to="#"
                className="text-[#ebefe7] hover:text-green-400 flex items-center"
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
                Logout
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logo from "../assets/Logo.svg";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <style>{`body { background-color: #d9d9d9; }`}</style>
//       <header
//         className={`${
//           isSticky ? "bg-[#3C5E39]" : "bg-[#3C5E39]"
//         } shadow-md transition-colors duration-300 sticky top-0 z-50`}
//       >
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <div>
//             <img src={Logo} alt="Velvety Logo" className="h-10 w-auto" />
//           </div>

//           <button
//             className="text-[#ebefe7] block md:hidden focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>

//           <nav className="hidden md:flex space-x-6 text-[#ebefe7] cursor-pointer">
//             <NavLink
//               to="/home"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
//               </svg>
//               <span>Home</span>
//             </NavLink>

//             <NavLink
//               to="/about"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
//               </svg>
//               <span>About</span>
//             </NavLink>

//             <NavLink
//               to="/product"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm2 5a2 2 0 114 0h2a2 2 0 114 0h1v2H5V7h1a2 2 0 014 0h2a2 2 0 114 0h1V7H8zm-1 9v-6h10v6H7z" />
//               </svg>
//               <span>Product</span>
//             </NavLink>

//             <NavLink
//               to="/contact"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2L12 11.4 5.4 6h13.2zM4 18v-9.5l7.6 5.7a1 1 0 001.2 0L20 8.5V18H4z" />
//               </svg>
//               <span>Contact</span>
//             </NavLink>

//             <NavLink
//               to="/cart"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M7 4v1h11l1.5 9H9.9L8.3 4H7zm2-2h2v2H9V2zm1 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
//               </svg>
//               <span>Cart</span>
//             </NavLink>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
