import React from "react";

import Navbar from "./component/UI/Navbar";
import ScrollTop from "./component/UI/ScrollTop";
import Footer from "./component/UI/Footer";

// eslint-disable-next-line
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Menu from "./component/pages/Menu";
import Review from "./component/pages/Review";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ScrollTop />
      <Navbar />
      {/* <Home />
      <About />
      <Menu /> */}
      <Review />
      <Footer />
    </React.Fragment>
  );
}

export default App;
