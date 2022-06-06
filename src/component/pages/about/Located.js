import React from "react";

import cx from "classnames";
import classes from "./Located.module.css";

import stickers from "../../data/stickers";
import IconCard from "../../UI/IconCard";

const Located = () => {
  return (
    <section
      className={cx(classes.about, classes.section, classes.bdContainer)}
      id="about"
    >
      <div className={cx(classes.about__container, classes.bdGrid)}>
        <div className={classes.about__data}>
          <h2 className={classes.sectionTitle}>Where are we located ?</h2>
        </div>
        <div className={classes.grid}>
          <IconCard img={stickers[1]} text={"JanakPuri"} />
          <IconCard img={stickers[2]} text={"TilakNagar"} />
          <IconCard img={stickers[3]} text={"RameshNagar"} />
          <IconCard img={stickers[4]} text={"CP"} />
          <IconCard img={stickers[9]} text={"Noida"} />
        </div>
      </div>
    </section>
  );
};

export default Located;
