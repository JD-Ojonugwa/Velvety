// import React from "react";
// import Image1 from "../assets/tradition.svg";
// import Image2 from "../assets/nature-product.svg";
// import Image3 from "../assets/skin 1.svg";
// import Image4 from "../assets/serum 3.svg";

// const About = () => {
//   return (
//     <div className="flex flex-row justify-center items-center h-screen md:h-auto">
//       {/* Left Side */}
//       <div className="w-full md:w-1/2 h-full bg-body py-12 md:py-0">
//         <div className="px-12 md:px-24">
//           <h1 className="text-[#899f87] text-3xl font-bold mb-4">
//             Inspired by traditional knowledge and nature
//           </h1>
//           <img src={Image1} alt="Nature Image" width={400} height={300} />
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="bg-[#ebefe7] text-[#899f87] w-full md:w-1/2 h-full py-12 md:py-0">
//         <div className="px-12 md:px-24">
//           <ul>
//             <li className="flex items-center mb-12">
//               <img src={Image2} alt="Image 2" />
//               <div className="ml-4">
//                 <h2 className="text-3xl font-bold">Title 1</h2>
//                 <p className="text-lg">Description 1</p>
//               </div>
//             </li>
//             <li className="flex items-center mb-12">
//               <img src={Image3} alt="Image 3" />
//               <div className="ml-4">
//                 <h2 className="text-3xl font-bold">Title 2</h2>
//                 <p className="text-lg">Description 2</p>
//               </div>
//             </li>
//             <li className="flex items-center">
//               <img src={Image4} alt="Image 4" />
//               <div className="ml-4">
//                 <h2 className="text-3xl font-bold">Title 3</h2>
//                 <p className="text-lg">Description 3</p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import Image1 from "../assets/tradition.svg";
import Image2 from "../assets/nature-product.svg";
import Image3 from "../assets/skin 1.svg";
import Image4 from "../assets/serum 3.svg";

const About = () => {
  return (
    <div className="flex flex-col items-center" id="about">
      {/* About Us Section */}
      <div className="w-full bg-[#e4ece0] py-6 text-left px-12 md:px-24">
        <h3 className="text-2xl font-semibold text-[#899f87] text-center">
          About Us
        </h3>
        <h1 className="text-4xl font-bold mt-2 text-[#899f87] text-center">
          Velvety Facial and Skincare Company
        </h1>

        <p className="mt-4 text-lg text-[#899f87]">
          Velvety is an indigenous company that specializes in the manufacture
          and development of facial and skincare products using the medicinal
          properties of the traditional First Nations pharmacopoeia, with a
          concern for sustainable development.
        </p>
        <p className="mt-2 text-lg text-[#899f87]">
          The products offered, whose benefits have been scientifically
          confirmed, are 100% natural and allow you to take care of your body
          and mind: calming teas, energizing infusions, anti-inflammatory
          essential oils, anti-age soaps and creams, etc.
        </p>
      </div>

      {/* Flex Container for Left and Right Side */}
      <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-screen">
        {/* Left Side */}
        <div className="w-full md:w-1/2 h-auto md:h-full bg-[#f2f6ef] flex flex-col justify-center items-center py-6">
          <div className="px-12 md:px-24 text-center">
            <h1 className="text-[#899f87] text-3xl font-bold mb-4">
              Inspired by traditional knowledge and nature
            </h1>
            <img src={Image1} alt="Nature Image" className="w-full h-auto" />
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#ebefe7] text-[#899f87] w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-center py-6">
          <div className="px-12 md:px-24 text-center">
            <ul>
              <li className="flex items-center mb-12">
                <img src={Image2} alt="Image 2" className="w-auto h-16" />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold">100% Organic</h2>
                  <p className="text-lg">
                    We craft skincare using the most exquisite ingredients from
                    the plant, earth and mineral realms.
                  </p>
                </div>
              </li>
              <li className="flex items-center mb-12">
                <img src={Image3} alt="Image 3" className="w-auto h-16" />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold">Fits your skin</h2>
                  <p className="text-lg">
                    I’ts all natural and processed based on traditional
                    knowledge with modern technology.
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <img src={Image4} alt="Image 4" className="w-auto h-16" />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold">Easy to use</h2>
                  <p className="text-lg">
                    Packed with a unique design as well as usefull that can help
                    you perform routine skin care.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
