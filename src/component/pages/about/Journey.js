import React from "react";

import cx from "classnames";
import classes from "./Journey.module.css";

import stickers from "../../data/stickers";
import IconCard from "../../UI/IconCard";

const Journey = () => {
  return (
    <section
      className={cx(classes.about, classes.section, classes.bdContainer)}
      id="about"
    >
      <div className={cx(classes.about__container, classes.bdGrid)}>
        <div className={classes.about__data}>
          <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
            Most loved food brand
          </h2>
          <p className={classes.about__description}>Our journey till date</p>
        </div>
        <div className={classes.iconcard}>
          <IconCard img={stickers[7]} text={"4.5+ Rating"} />
          <IconCard img={stickers[8]} text={"39+ kitchens"} />
          <IconCard img={stickers[9]} text={"19 lakh+ happy consumers"} />
          <IconCard img={stickers[10]} text={"Delivered 92 lakh+"} />
        </div>
      </div>
    </section>
  );
};

export default Journey;
