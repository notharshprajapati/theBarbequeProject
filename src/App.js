import React from "react";

import Navbar from "./component/UI/Navbar";
import ScrollTop from "./component/UI/ScrollTop";
import Footer from "./component/UI/Footer";

// import Home from "./component/pages/Home";
import Review from "./component/pages/Review";

import "./App.module.css";

function App() {
  return (
    <React.Fragment>
      <ScrollTop />
      <Navbar />
      <Review />
      <Footer />
    </React.Fragment>
  );
}

export default App;
