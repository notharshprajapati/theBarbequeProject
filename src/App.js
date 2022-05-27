import React from "react";
import Navbar from "./component/pages/home/Navbar";
// import Comp from "./trash/Comp";
import "./App.module.css";
import ScrollTop from "./component/UI/ScrollTop";
import Home from "./component/pages/home/Home";
// import Home from "./component/UI/Home";
// import cx from "classnames";
// import classes from "./App.module.css";
function App() {
  return (
    <React.Fragment>
      <ScrollTop />
      <Navbar />
      <main className="l-main">
        <Home />
        {/* <Comp /> */}
      </main>
      {/* <h1 className={cx(classes.red, classes.size)}>multime class</h1> */}
    </React.Fragment>
  );
}

export default App;
