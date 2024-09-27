import React from "react";
import ProductImage1 from "../assets/Product1.svg"; //
import ProductImage2 from "../assets/Product2.svg";
import ProductImage3 from "../assets/Product3.svg";
import ProductImage4 from "../assets/Product4.svg";
import ProductImage5 from "../assets/product5.svg";
import ProductImage6 from "../assets/product6.svg";

const Product = () => {
  return (
    <div className="w-full bg-[#e4ece0] py-6 px-12 md:px-24 text-center">
      <h3 className="text-2xl font-semibold text-[#899f87]">
        Our Featured Products
      </h3>
      <h1 className="text-4xl font-bold mt-2 text-[#899f87]">
        Facial and Skincare, Natural and Certified Organic
      </h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {/* Card 1 */}
        <div className="bg-[#ebefe7] p-4 rounded-lg transition-transform transform hover:scale-105 relative">
          <img src={ProductImage1} alt="Product 1" className="w-full h-auto" />
          <div className="mt-2 text-left text-[#899f87]">
            <h4 className="font-bold">Notorious</h4>
            <p className="text-lg">$29.99</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            {/* Buy Now Button */}
            <button className="bg-[#899f87] text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
            {/* Rating Stars */}
            <div>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ebefe7] p-4 rounded-lg transition-transform transform hover:scale-105 relative">
          <img src={ProductImage2} alt="Product 2" className="w-full h-auto" />
          <div className="mt-2 text-left text-[#899f87]">
            <h4 className="font-bold">Holocena</h4>
            <p className="text-lg">$24.99</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            {/* Buy Now Button */}
            <button className="bg-[#899f87] text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
            {/* Rating Stars */}
            <div>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#ebefe7] p-4 rounded-lg transition-transform transform hover:scale-105 relative">
          <img src={ProductImage3} alt="Product 3" className="w-full h-auto" />
          <div className="mt-2 text-left text-[#899f87]">
            <h4 className="font-bold">Inamorata</h4>
            <p className="text-lg">$19.99</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            {/* Buy Now Button */}
            <button className="bg-[#899f87] text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
            {/* Rating Stars */}
            <div>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#ebefe7] p-4 rounded-lg transition-transform transform hover:scale-105 relative">
          <img src={ProductImage4} alt="Product 4" className="w-full h-auto" />
          <div className="mt-2 text-left text-[#899f87]">
            <h4 className="font-bold">Chicori</h4>
            <p className="text-lg">$20.00</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            {/* Buy Now Button */}
            <button className="bg-[#899f87] text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
            {/* Rating Stars */}
            <div>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#ebefe7] p-4 rounded-lg transition-transform transform hover:scale-105 relative">
          <img src={ProductImage5} alt="Product 5" className="w-full h-auto" />
          <div className="mt-2 text-left text-[#899f87] ">
            <h4 className="font-bold">Light cool</h4>
            <p className="text-lg">$22.55</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            {/* Buy Now Button */}
            <button className="bg-[#899f87] text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
            {/* Rating Stars */}
            <div>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#ebefe7] p-4 rounded-lg transition-transform transform hover:scale-105 relative">
          <img src={ProductImage6} alt="Product 6" className="w-full h-auto" />
          <div className="mt-2 text-left text-[#899f87]">
            <h4 className="font-bold">Glasswing</h4>
            <p className="text-lg">$21.99</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            {/* Buy Now Button */}
            <button className="bg-[#899f87] text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
            {/* Rating Stars */}
            <div>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
