import React from "react";
import Top from "./menu/Top";
import Steps from "./menu/Steps";
import Favourite from "./menu/Favourite";

const Menu = () => {
  return (
    <main className="l-main">
      <Top />
      <Steps />
      <Favourite />
    </main>
  );
};

export default Menu;
