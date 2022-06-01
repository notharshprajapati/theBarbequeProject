import React from "react";
import "./Packing.css";
import About from "../../img/about.jpg";
import images from "../../data/images";
import IconCard from "../../UI/IconCard";

const Packing = () => {
  return (
    <section class="about section bd-container" id="about">
      <div class="about__container bd-grid">
        <div class="about__data">
          <h2 class="section-title about__initial">
            What goes on in our kitchens?
          </h2>
          <p class="about__description">
            The food in our kitchens is made with the highest standard of
            quality and cleanliness. We understand the value of your trust,
            therefore our cooking stations go through rigorous cleaning
            everyday.
          </p>
        </div>
      </div>
      <div className="iconcard">
        <IconCard img={images[7]} text={"4.5+ Rating"} />
        <IconCard img={images[8]} text={"39+ kitchens"} />
        <IconCard img={images[9]} text={"19 lakh+ consumers"} />
        <IconCard img={images[10]} text={"Delivered 92 lakh+"} />
      </div>
    </section>
  );
};

export default Packing;
