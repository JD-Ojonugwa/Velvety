// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.svg";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle the sidebar
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Set body background color */}
//       <style>{`body { background-color: #d9d9d9; }`}</style>

//       <header className="bg-[#3C5E39] shadow-md">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           {/* Logo */}
//           <div>
//             <img src={Logo} alt="Velvety Logo" className="h-10 w-auto" />
//           </div>

//           {/* Hamburger menu for mobile */}
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

//           {/* Navbar for desktop */}
//           <nav className="hidden md:flex space-x-6 text-[#ebefe7] ">
//             <Link to="/home" className="flex items-center hover:text-green-400">
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
//               </svg>
//               <span>Home</span>
//             </Link>
//             <Link
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
//             </Link>
//             <Link
//               to="/footer"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
//               </svg>
//               <span>Contact</span>
//             </Link>
//             <Link
//               to="/services"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
//               </svg>
//               <span>Services</span>
//             </Link>
//             <Link
//               to="/product"
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
//             </Link>
//             <Link
//               to="/login"
//               className="flex items-center hover:text-green-400"
//             >
//               <svg
//                 className="w-5 h-5 mr-2 fill-current"
//                 fill="#ebefe7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//               </svg>

//               <span>Login</span>
//             </Link>
//           </nav>
//         </div>

//         {/* Mobile Sidebar */}
//         <div
//           className={`fixed inset-0 bg-black bg-opacity-50 z-20 transform ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 md:hidden`}
//         >
//           <div className="fixed top-0 right-0 w-80 bg-[#899f87] h-full shadow-md p-6 z-30">
//             {/* Close button */}
//             <button className="text-[#ebefe7] mb-4" onClick={toggleMenu}>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               </svg>
//             </button>

//             {/* Mobile Navbar */}
//             <nav className="flex flex-col space-y-4">
//               <a
//                 href="#home"
//                 className="text-[#ebefe7] hover:text-green-400 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2 fill-current"
//                   fill="#ebefe7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
//                 </svg>
//                 Home
//               </a>
//               <a
//                 href="#about"
//                 className="text-[#ebefe7] hover:text-green-400 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2 fill-current"
//                   fill="#ebefe7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
//                 </svg>
//                 About
//               </a>
//               <a
//                 href="#contact"
//                 className="text-[#ebefe7] hover:text-green-400 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2 fill-current"
//                   fill="#ebefe7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
//                 </svg>
//                 Contact
//               </a>
//               <a
//                 href="#services"
//                 className="text-[#ebefe7] hover:text-green-400 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2 fill-current"
//                   fill="#ebefe7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
//                 </svg>
//                 Services
//               </a>
//               <a
//                 href="#cart"
//                 className="text-[#ebefe7] hover:text-green-400 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2 fill-current"
//                   fill="#ebefe7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M7 4v1h11l1.5 9H9.9L8.3 4H7zm2-2h2v2H9V2zm1 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
//                 </svg>
//                 Cart
//               </a>
//               <a
//                 href="#login"
//                 className="text-[#ebefe7] hover:text-green-400 flex items-center"
//               >
//                 <svg
//                   className="w-5 h-5 mr-2 fill-current"
//                   fill="#ebefe7"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//                 </svg>
//                 Login
//               </a>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <nav className="hidden md:flex space-x-6 text-[#ebefe7]">
            {[
              {
                to: "/home",
                label: "Home",
                icon: "M12 3l9 8h-3v9H6V11H3l9-8z",
              },
              {
                to: "/about",
                label: "About",
                icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
              },
              {
                to: "/footer",
                label: "Contact",
                icon: "M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z",
              },
              {
                to: "/services",
                label: "Services",
                icon: "M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z",
              },
              {
                to: "/product",
                label: "Cart",
                icon: "M7 4v1h11l1.5 9H9.9L8.3 4H7zm2-2h2v2H9V2zm1 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
              },
              {
                to: "/login",
                label: "Login",
                icon: "M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z",
              },
            ].map(({ to, label, icon }, index) => (
              <Link
                key={index}
                to={to}
                className="flex items-center hover:text-green-400"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d={icon} />
                </svg>
                <span>{label}</span>
              </Link>
            ))}
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
            <nav className="flex flex-col space-y-4 text-[#ebefe7]">
              {[
                {
                  to: "/home",
                  label: "Home",
                  icon: "M12 3l9 8h-3v9H6V11H3l9-8z",
                },
                {
                  to: "/about",
                  label: "About",
                  icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
                },
                {
                  to: "/footer",
                  label: "Contact",
                  icon: "M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z",
                },
                {
                  to: "/services",
                  label: "Services",
                  icon: "M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z",
                },
                {
                  to: "/product",
                  label: "Cart",
                  icon: "M7 4v1h11l1.5 9H9.9L8.3 4H7zm2-2h2v2H9V2zm1 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
                },
                {
                  to: "/login",
                  label: "Login",
                  icon: "M12 12c2.5 0 4.5 2 4.5 4.5S14.5 21 12 21 7.5 19 7.5 16.5 9.5 12 12 12zM12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm4 10.5c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z",
                },
              ].map(({ to, label, icon }, index) => (
                <Link
                  key={index}
                  to={to}
                  className="flex items-center hover:text-green-400"
                >
                  <svg
                    className="w-5 h-5 mr-2 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon} />
                  </svg>
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// // import React, { useState } from "react";
// // import { Link as RouterLink } from "react-router-dom";
// // import { Link as ScrollLink, Element } from "react-scroll";
// // import Logo from "../assets/Logo.svg";

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Function to toggle the sidebar
// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <>
// //       {/* Set body background color */}
// //       <style>{`body { background-color: #d9d9d9; }`}</style>

// //       <header className="bg-[#3C5E39] shadow-md">
// //         <div className="container mx-auto flex justify-between items-center py-4 px-6">
// //           {/* Logo */}
// //           <div>
// //             <img src={Logo} alt="Velvety Logo" className="h-10 w-auto" />
// //           </div>

// //           {/* Hamburger menu for mobile */}
// //           <button
// //             className="text-[#ebefe7] block md:hidden focus:outline-none"
// //             onClick={toggleMenu}
// //           >
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M4 6h16M4 12h16m-7 6h7"
// //               ></path>
// //             </svg>
// //           </button>

// //           {/* Navbar for desktop */}
// //           <nav className="hidden md:flex space-x-6 text-[#ebefe7]">
// //             {/* Scroll to sections using ScrollLink */}
// //             <ScrollLink
// //               to="home"
// //               smooth={true}
// //               duration={500}
// //               className="flex items-center hover:text-green-400 cursor-pointer"
// //             >
// //               <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
// //                 <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
// //               </svg>
// //               <span>Home</span>
// //             </ScrollLink>
// //             <ScrollLink
// //               to="about"
// //               smooth={true}
// //               duration={500}
// //               className="flex items-center hover:text-green-400 cursor-pointer"
// //             >
// //               <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
// //                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
// //               </svg>
// //               <span>About</span>
// //             </ScrollLink>
// //             <ScrollLink
// //               to="footer"
// //               smooth={true}
// //               duration={500}
// //               className="flex items-center hover:text-green-400 cursor-pointer"
// //             >
// //               <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
// //                 <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
// //               </svg>
// //               <span>Contact</span>
// //             </ScrollLink>
// //             <ScrollLink
// //               to="product"
// //               smooth={true}
// //               duration={500}
// //               className="flex items-center hover:text-green-400 cursor-pointer"
// //             >
// //               <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
// //                 <path d="M12 3l9 8h-3v9H6V11H3l9-8z" />
// //               </svg>
// //               <span>Product</span>
// //             </ScrollLink>
// //             <RouterLink
// //               to="services"
// //               className="flex items-center hover:text-green-400"
// //             >
// //               <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
// //                 <path d="M20 4h-5.586l-1.707-1.707A2 2 0 0011.293 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V8h6v2zm4 6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" />
// //               </svg>
// //               <span>Services</span>
// //             </RouterLink>
// //           </nav>
// //         </div>

// //         {/* Mobile Sidebar */}
// //         {/* Similar changes for mobile navbar can be made here */}
// //       </header>

// //       {/* Sections where the ScrollLink will scroll to */}
// //       <Element name="home">
// //         <section id="home" className="h-screen">
// //           {/* Home section content */}
// //         </section>
// //       </Element>
// //       <Element name="about">
// //         <section id="about" className="h-screen">
// //           {/* About section content */}
// //         </section>
// //       </Element>
// //     </>
// //   );
// // };

// // export default Header;
