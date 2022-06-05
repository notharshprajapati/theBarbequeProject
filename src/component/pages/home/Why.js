import cx from "classnames";
import classes from "./Why.module.css";

import stickers from "../../data/stickers";

import IconCard from "../../UI/IconCard";

const Why = () => {
  return (
    <section
      className={cx(classes.menu, classes.section, classes.bdContainer)}
      id="menu"
    >
      <h2 className={classes.sectionTitle}>Why Choose Our Food ?</h2>

      <div className={cx(classes.menu__container, classes.bdGrid)}>
        <IconCard img={stickers[13]} text={"Quality Food"} />
        <IconCard img={stickers[14]} text={"Healthy Food"} />
        <IconCard svg={"bx bx-cart"} text={"Fast Delivery"} />
      </div>

      <p className={classes.fact}>
        Fun Fact: You can also create your own meal combos!
      </p>
    </section>
  );
};

export default Why;
