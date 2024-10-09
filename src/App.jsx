import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Product from "./Component/Product";
import Services from "./Component/Services";
import Testimonials from "./Component/Testimonials";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Product />
              <Services />
              <Testimonials />
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
              <Product />
              <Services />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/cart" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
