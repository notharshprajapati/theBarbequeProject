import React from "react";
import Navbar from "./component/pages/Navbar";
import "./App.module.css";
import ScrollTop from "./component/UI/ScrollTop";
import Home from "./component/pages/home/Home";
import About from "./component/pages/home/About";
import Why from "./component/pages/home/Why";
import Bestseller from "./component/pages/home/Bestseller";
import Testimonial from "./component/pages/home/Testimonial";
import Update from "./component/pages/home/Update";
import Footer from "./component/pages/Footer";
// import cx from "classnames";
// import classes from "./App.module.css";
function App() {
  return (
    <React.Fragment>
      <ScrollTop />
      <Navbar />
      <main className="l-main">
        <Home />
        <About />
        <Why />
        <Bestseller />
        <Testimonial />
        <Update />
      </main>
      <Footer />
      {/* <h1  className={cx(classes.red, classes.size)}>multime class</h1> */}
    </React.Fragment>
  );
}

export default App;
