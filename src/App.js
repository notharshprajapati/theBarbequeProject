import React from "react";
import Navbar from "./component/UI/Navbar";
import "./App.module.css";
// import cx from "classnames";
// import classes from "./App.module.css";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <h1 className={cx(classes.red, classes.size)}>multime class</h1> */}
    </React.Fragment>
  );
}

export default App;
