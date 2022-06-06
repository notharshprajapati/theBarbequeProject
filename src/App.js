import React from "react";

import Navbar from "./component/UI/Navbar";
import ScrollTop from "./component/UI/ScrollTop";
import Footer from "./component/UI/Footer";

// eslint-disable-next-line
import Home from "./component/pages/Home";
import Menu from "./component/pages/Menu";



import "./App.module.css";

function App() {
  return (
    <React.Fragment>
      {/* <div>
        {foods &&
          foods.map((food) => {
            return (
              <div key={food.id}>
                <img src={food.image} alt={food.name} />
                <h2>{food.name}</h2>
                <h3>{food.veg === 0 ? "Non-Veg" : "Veg"}</h3>
                <br />
              </div>
            );
          })}
      </div> */}

      <ScrollTop />
      <Navbar />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

export default App;
