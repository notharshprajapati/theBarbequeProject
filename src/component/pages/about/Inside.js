import React from "react";

import cx from "classnames";
import classes from "./Inside.module.css";

import About from "../../img/about.jpg";
import stickers from "../../data/stickers";
import IconCard from "../../UI/IconCard";

const Packing = () => {
  return (
    <section
      className={cx(classes.about, classes.section, classes.bdContainer)}
      id="about"
    >
      <div className={cx(classes.about__container, classes.bdGrid)}>
        <div className={classes.about__data}>
          <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
            What goes on in our kitchens?
          </h2>
          <p className={classes.about__description}>
            The food in our kitchens is made with the highest standard of
            quality and cleanliness. We understand the value of your trust,
            therefore our cooking stations go through rigorous cleaning
            everyday.
          </p>
        </div>

        <img src={About} alt="" class={classes.about__img} />
      </div>
      <div className={classes.iconcard}>
        <IconCard img={stickers[7]} text={"4.5+ Rating"} />
        <IconCard img={stickers[8]} text={"39+ kitchens"} />
        <IconCard img={stickers[9]} text={"19 lakh+ consumers"} />
        <IconCard img={stickers[10]} text={"Delivered 92 lakh+"} />
      </div>
    </section>
  );
};

export default Packing;
