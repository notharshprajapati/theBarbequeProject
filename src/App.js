import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Menu from "./component/pages/Menu";
import Review from "./component/pages/Review";
import Error from "./component/pages/Error";
import SharedLayout from "./SharedLayout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" />
          <Route path="review" element={<Review />} />
          <Route path="Contact" element={<Review />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
