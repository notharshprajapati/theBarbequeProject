import React from "react";
import "./Located.css";
import images from "../../data/images";
import IconCard from "../../UI/IconCard";

const Located = () => {
  return (
    <section class="about section bd-container" id="about">
      <div class="about__container bd-grid">
        <div class="about__data">
          <h2 class="section-title">Where are we located ?</h2>
        </div>
        <div className="grid">
          <IconCard img={images[1]} text={"JanakPuri"} />
          <IconCard img={images[2]} text={"TilakNagar"} />
          <IconCard img={images[3]} text={"RameshNagar"} />
          <IconCard img={images[4]} text={"CP"} />
          <IconCard img={images[9]} text={"Noida"} />
        </div>
      </div>
    </section>
  );
};

export default Located;
