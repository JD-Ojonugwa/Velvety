import React from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Product from "./Component/Product";
import Services from "./Component/Services";
import Testimonials from "./Component/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Product />
      <Services />
      <Testimonials />
    </div>
  );
};

export default App;
