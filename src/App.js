import React from "react";

import Navbar from "./component/UI/Navbar";
import ScrollTop from "./component/UI/ScrollTop";
import Footer from "./component/UI/Footer";

// eslint-disable-next-line
import Home from "./component/pages/Home";
import About from "./component/pages/About";

import "./App.module.css";

function App() {
  return (
    <React.Fragment>
      <ScrollTop />
      <Navbar />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
