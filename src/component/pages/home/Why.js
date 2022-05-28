import cx from "classnames";
import classes from "./Why.module.css";

import stick13 from "../../img/svg/stick13.png";
import stick14 from "../../img/svg/stick14.png";
import PriceCard from "../../UI/PriceCard";

const Why = () => {
  return (
    <section
      className={cx(classes.menu, classes.section, classes.bdContainer)}
      id="menu"
    >
      <h2 className={classes.sectionTitle}>Why Choose Our Food ?</h2>

      <div className={cx(classes.menu__container, classes.bdGrid)}>
        <PriceCard img={stick13} text={"Quality Food"} />
        <PriceCard img={stick14} text={"Healthy Food"} />
        <PriceCard svg={"bx bx-cart"} text={"Fast Delivery"} />
      </div>
      <p className={classes.fact}>
        Fun Fact: You can also create your own meal combos!
      </p>
    </section>
  );
};

export default Why;
