import React from "react";
import Navbar from "./component/pages/Navbar";
import "./App.module.css";
import ScrollTop from "./component/UI/ScrollTop";
import Home from "./component/pages/home/Home";
import About from "./component/pages/home/About";
import Why from "./component/pages/home/Why";

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
      </main>
      {/* <h1  className={cx(classes.red, classes.size)}>multime class</h1> */}
    </React.Fragment>
  );
}

export default App;
