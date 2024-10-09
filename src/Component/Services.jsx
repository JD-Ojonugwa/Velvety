// import React from "react";
// import Image from "../assets/Image.svg";

// const Services = () => {
//   return (
//     <div className="w-full bg-[#ebefe7] py-6 text-left px-6 md:px-24">
//       <h3 className="text-2xl font-semibold text-[#899f87] text-center">
//         Try our services
//       </h3>
//       <div className="flex w-full pt-4 flex-col md:flex-row items-center md:items-start">
//         {/* Image Container */}
//         <div className="w-full md:w-2/4 flex justify-center">
//           <img src={Image} alt="Image" className="max-w-full h-auto" />
//         </div>

//         {/* Text Container */}
//         <div className="w-full md:w-3/4 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
//           <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[#899f87]">
//             Your skin diagnosis in 3 minutes
//           </h1>
//           <p className="mt-4 text-lg text-[#899f87]">
//             Say hello to a more radiant, healthier you with personalized
//             skincare that's as unique as you are.
//           </p>
//           <button className="bg-[#899f87] text-[#ebefe7] font-bold py-2 px-4 rounded mt-4 flex items-center transition-transform transform hover:scale-105">
//             Start my diagnosis
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="#EBEFE7"
//               strokeWidth="2"
//               className="w-4 h-4 ml-2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Services;

import React from "react";
import Image from "../assets/Image.svg";
import Image1 from "../assets/Happy Skin.svg";
import Image2 from "../assets/feedback.svg";
import Image3 from "../assets/beauty-treatment.svg";

const Services = () => {
  return (
    <div className="w-full bg-[#ebefe7] py-6 text-left px-6 md:px-24">
      <h3 className="text-2xl font-semibold text-[#899f87] text-center">
        Try our services
      </h3>
      <div className="flex w-full pt-4 flex-col md:flex-row items-center md:items-start">
        {/* Image Container */}
        <div className="w-full md:w-2/4 flex justify-center">
          <img src={Image} alt="Image" className="max-w-full h-auto" />
        </div>

        {/* Text Container */}
        <div className="w-full md:w-3/4 mt-6 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[#899f87]">
            Your skin diagnosis in 3 minutes
          </h1>
          <p className="mt-4 text-lg text-[#899f87]">
            Say hello to a more radiant, healthier you with personalized
            skincare that's as unique as you are.
          </p>
          <button className="bg-[#899f87] text-[#ebefe7] font-bold py-2 px-4 rounded mt-4 flex items-center transition-transform transform hover:scale-105">
            Start my diagnosis
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#EBEFE7"
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
      </div>

      {/* New Section with 3 Flex Divs */}
      <div className="w-full px-2 md:px-2 lg:px-4 flex flex-col md:flex-row justify-center items-center mt-12 border-t-2 border-[#899f87]">
        {/* Div 1 */}
        <div className="flex flex-col items-center text-center px-3 py-3 w-full">
          <img src={Image1} alt="Service 1" className="mb-4" />
          <p className="text-sm text-[#899f87]">Loyalty Program</p>
          <h2 className="text-xl font-bold text-[#899f87] mt-2">
            For Happy Skin
          </h2>
          <button className="bg-[#899f87] text-[#ebefe7] font-bold py-2 px-4 rounded mt-4 flex items-center transition-transform transform hover:scale-105">
            Join program{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#EBEFE7"
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

        {/* Div 2 */}
        <div className="flex flex-col items-center text-center px-3 py-3 w-full">
          <img src={Image2} alt="Service 2" className="mb-4" />
          <p className="text-sm text-[#899f87]">Organic beauty is shared</p>
          <h2 className="text-xl font-bold text-[#899f87] mt-2">
            Sponsor those you love!
          </h2>
          <button className="bg-[#899f87] text-[#ebefe7] font-bold py-2 px-4 rounded mt-4 flex items-center transition-transform transform hover:scale-105">
            Refer a Friend
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#EBEFE7"
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

        {/* Div 3 */}
        <div className="flex flex-col items-center text-center px-3 py-3 w-full">
          <img src={Image3} alt="Service 3" className="mb-4" />
          <p className="text-sm text-[#899f87]">
            Treat yourself to good weather
          </p>
          <h2 className="text-xl font-bold text-[#899f87] mt-2">
            at Maison Absolution
          </h2>
          <button className="bg-[#899f87] text-[#ebefe7] font-bold py-2 px-4 rounded mt-4 flex items-center transition-transform transform hover:scale-105">
            Try Treatments
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#EBEFE7"
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
      </div>
    </div>
  );
};

export default Services;
