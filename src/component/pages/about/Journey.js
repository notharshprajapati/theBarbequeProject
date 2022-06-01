import React from "react";
import "./Journey.css";
import images from "../../data/images";
import IconCard from "../../UI/IconCard";

const Journey = () => {
  return (
    <section class="about section bd-container" id="about">
      <div class="about__container bd-grid">
        <div class="about__data">
          <h2 class="section-title about__initial">Most loved food brand</h2>
          <p class="about__description">Our journey till date</p>
        </div>
        <div className="iconcard">
          <IconCard img={images[7]} text={"4.5+ Rating"} />
          <IconCard img={images[8]} text={"39+ kitchens"} />
          <IconCard img={images[9]} text={"19 lakh+ happy consumers"} />
          <IconCard img={images[10]} text={"Delivered 92 lakh+"} />
        </div>
      </div>
    </section>
  );
};

export default Journey;
