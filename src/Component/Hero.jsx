// // // import React from "react";
// // // import HeroImage from "../assets/Hero_Image1.svg";
// // // import FlowerSvg from "../assets/Hero_Image2.svg";

// // // const Hero = () => {
// // //   return (
// // //     <div className="flex flex-row justify-center items-center h-screen">
// // //       <div className="hidden md:block w-1/2 h-full bg-[#899f87] ">
// // //         <img src={HeroImage} alt="Hero image" />
// // //       </div>
// // //       <div className="w-full md:w-1/2 h-full relative">
// // //         <img src={FlowerSvg} layout="fill" objectFit="cover" alt="Flower SVG" />
// // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-1/4 md:translate-x-0">
// // //           <h1 className="text-4xl font-bold text-[#ebefe7] text-center md:text-left">
// // //             Let nature take care of your body and soul
// // //           </h1>
// // //           <p className="text-lg text-[#ebefe7] text-center md:text-left">
// // //             Explore our latest collections!
// // //           </p>

// // //           <div className="flex justify-center md:justify-start">
// // //             <button className="bg-[#ebefe7] hover:bg-[#899f87] text-[#3C5E39] font-bold py-2 px-4 rounded mt-4 flex items-center">
// // //               Shop Now
// // //               <svg
// // //                 xmlns="http://www.w3.org/2000/svg"
// // //                 fill="none"
// // //                 viewBox="0 0 24 24"
// // //                 stroke="#3C5E39"
// // //                 strokeWidth="2"
// // //                 className="w-4 h-4 ml-2"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   d="M14 5l7 7m0 0l-7 7m7-7H3"
// // //                 />
// // //               </svg>
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

import React, { useRef } from "react";
import HeroImage from "../assets/Hero_Image1.svg";
import FlowerSvg from "../assets/Hero_Image2.svg";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center h-screen"
      id="home"
    >
      {/* Left side: Hidden on small screens */}
      <div className="hidden md:block w-1/2 h-full bg-[#899f87]">
        <img
          src={HeroImage}
          alt="Hero image"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 h-full relative">
        <img
          src={FlowerSvg}
          alt="Flower SVG"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-1/4 md:translate-x-0">
          <h1 className="text-4xl font-bold text-[#ebefe7] text-center md:text-left">
            Let nature take care of your body and soul
          </h1>
          <p className="text-lg text-[#ebefe7] text-center md:text-left">
            Explore our latest collections!
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-[#ebefe7] hover:bg-[#899f87] text-[#3C5E39] font-bold py-2 px-4 rounded mt-4 flex items-center">
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#3C5E39"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* HeroImage displayed after "Shop Now" button on small screens */}
          <div className="mt-4 block md:hidden">
            <img
              src={HeroImage}
              alt="Hero image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
