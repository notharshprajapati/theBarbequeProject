import React from "react";

import Top from "./home/Top";
import About from "./home/About";
import Why from "./home/Why";
import Bestseller from "./home/Bestseller";
import Testimonial from "./home/Testimonial";
import Update from "./home/Update";

const Home = () => {
  return (
    <main className="l-main">
      <Top />
      <About />
      <Why />
      <Bestseller />
      <Testimonial />
      <Update />
    </main>
  );
};

export default Home;
