import React from "react";
import Image from "../assets/Image.svg";

const Services = () => {
  return (
    <div className="w-full bg-[#ebefe7] py-6 text-left px-12 md:px-24">
      <h3 className="text-2xl font-semibold text-[#899f87] text-center">
        Try our services
      </h3>
      <div className="flex w-full pt-4 flex-col md:flex-row">
        <div className="w-2/4">
          <img src={Image} alt="Image" />
        </div>
        <div className="w-3/4">
          <h1 className="text-4xl font-bold mt-2 text-[#899f87]">
            Your skin diagnosis in 3 minutes
          </h1>
          <p className="mt-4 text-lg text-[#899f87]">
            Say hello to a more radiant, healthier you with personalized
            skincare that's as unique as you are.
          </p>
          <button className="bg-[#899f87] text-[#3C5E39] font-bold py-2 px-4 rounded mt-4 flex items-center transition-transform transform hover:scale-105 relative">
            Start my diagnosis
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
      </div>
    </div>
  );
};

export default Services;
