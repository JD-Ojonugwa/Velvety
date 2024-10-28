import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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

          <Route path="/product" element={<ProductLayout />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
