import React from "react";
//import Navbar from "./component/UI/Navbar";
import FakeNavbar from "./FakeNavbar";
import "./App.module.css";
// import cx from "classnames";
// import classes from "./App.module.css";
function App() {
  return (
    <React.Fragment>
      <FakeNavbar />
      {/* <h1 className={cx(classes.red, classes.size)}>multime class</h1> */}
    </React.Fragment>
  );
}

export default App;
