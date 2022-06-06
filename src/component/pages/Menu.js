import React from "react";
import Top from "./menu/Top";
import Steps from "./menu/Steps";
import Favourite from "./menu/Favourite";
import MenuGrid from "./menu/menuGrid/MenuGrid";

const Menu = () => {
  return (
    <main className="l-main">
      <Top />
      <Steps />
      <Favourite />
      <MenuGrid />
    </main>
  );
};

export default Menu;
