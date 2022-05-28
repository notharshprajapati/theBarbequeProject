import cx from "classnames";
import classes from "./Why.module.css";

import plate1 from "../../img/plate1.png";
import plate2 from "../../img/plate2.png";
import plate3 from "../../img/plate3.png";
import PriceCard from "../../UI/PriceCard";

const Why = () => {
  return (
    <section
      className={cx(classes.menu, classes.section, classes.bdContainer)}
      id="menu"
    >
      <h2 className={classes.sectionTitle}>Why Choose Our Food ?</h2>

      <div className={cx(classes.menu__container, classes.bdGrid)}>
        <PriceCard img={plate1} text={"Quality Food"} />
        <PriceCard img={plate2} text={"Healthy Food"} />
        <PriceCard img={plate3} text={"Fast Delivery"} />
      </div>
      <p className={classes.fact}>
        Fun Fact: You can also create your own meal combos!
      </p>
    </section>
  );
};

export default Why;
