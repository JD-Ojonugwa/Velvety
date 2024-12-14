import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Jane Doe",
    review:
      "Absolutely amazing service! My skin feels so much better after just a few weeks.",
    rating: 5,
  },
  {
    name: "John Smith",
    review:
      "Great experience! My skin has never felt smoother. Highly recommend!",
    rating: 4,
  },
  {
    name: "Emily Davis",
    review:
      "Fantastic product range and very helpful customer service. Loving the results!",
    rating: 4.5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#e4ece0] py-12" id="testimonials">
      <h2 className="text-3xl font-bold text-[#899f87] text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="relative flex justify-center items-center">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-[#3C5E39] text-2xl md:text-3xl"
        >
          &#8249;
        </button>

        {/* Testimonial content */}
        <div className="max-w-xl w-full text-center p-6 bg-[#ebefe7] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#899f87]">
            {reviews[current].name}
          </h3>
          <p className="mt-4 text-lg text-[#899f87]">
            "{reviews[current].review}"
          </p>
          <div className="flex justify-center mt-4">
            {/* Display rating stars */}
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={24}
                  color={
                    ratingValue <= reviews[current].rating ? "#3C5E39" : "#ccc"
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 text-[#3C5E39] text-2xl md:text-3xl"
        >
          &#8250;
        </button>
      </div>

      {/* Carousel navigation (dots) */}
      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-[#3C5E39]" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
