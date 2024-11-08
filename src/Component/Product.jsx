import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductImage1 from "../assets/Product1.svg";
import ProductImage2 from "../assets/Product2.svg";
import ProductImage3 from "../assets/Product3.svg";
import ProductImage4 from "../assets/Product4.svg";
import ProductImage5 from "../assets/product5.svg";
import ProductImage6 from "../assets/product6.svg";

const products = [
  { id: 1, name: "Notorious", price: 29.99, image: ProductImage1 },
  { id: 2, name: "Holocena", price: 24.99, image: ProductImage2 },
  { id: 3, name: "Inamorata", price: 19.99, image: ProductImage3 },
  { id: 4, name: "Chicori", price: 20.0, image: ProductImage4 },
  { id: 5, name: "Light cool", price: 22.55, image: ProductImage5 },
  { id: 6, name: "Glasswing", price: 21.99, image: ProductImage6 },
];

const Product = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const location = useLocation;

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    navigate("/cart");
  };

  // Check for passed product data when the component loads
  useEffect(() => {
    if (location.state?.addToCartProduct) {
      addToCart(location.state.addToCartProduct);
    }
  }, [location.state]);

  return (
    <div
      className="w-full bg-[#e4ece0] py-6 px-12 md:px-24 text-center"
      id="product"
    >
      <h3 className="text-2xl font-semibold text-[#899f87]">
        Our Featured Products
      </h3>
      <h1 className="text-4xl font-bold mt-2 text-[#899f87]">
        Facial and Skincare, Natural and Certified Organic
      </h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#ebefe7] p-4 rounded-lg transition-transform transform hover:scale-105 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
            <div className="mt-2 text-left text-[#899f87]">
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-lg">${product.price}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              {/* Buy Now Button */}
              <button
                onClick={() => addToCart(product)}
                className="bg-[#899f87] text-[#ebefe7] px-4 py-2 rounded-lg"
              >
                Buy Now
              </button>
              {/* Rating Stars */}
              <div>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
