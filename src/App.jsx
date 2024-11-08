import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Product from "./Component/Product";
import Services from "./Component/Services";
import Testimonials from "./Component/Testimonials";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import ProductLayout from "./Component/ProductLayout";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to calculate total for the checkout page
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Product setCartItems={setCartItems} cartItems={cartItems} />
                <Services />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Product setCartItems={setCartItems} cartItems={cartItems} />
                <Services />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/" element={<Hero />} />
          <Route
            path="/product"
            element={
              <Product cartItems={cartItems} setCartItems={setCartItems} />
            }
          />

          <Route path="/product" element={<ProductLayout />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />

          <Route
            path="/checkout"
            element={<Checkout total={calculateTotal()} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
