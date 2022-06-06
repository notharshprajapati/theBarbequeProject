import cx from "classnames";
import classes from "./Bestseller.module.css";

import Carousel from "../../UI/Carousel";
import foods from "../../data/foods.json";
const Bestseller = () => {
  return (
    <section
      className={cx(classes.menu, classes.section, classes.bdContainer)}
      id="about"
    >
      <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
        Our Bestseller
      </h2>
      <p className={classes.about__description}>
        Thinking of ghar jaisi Paneer Tikka Sashlik? Or Dreaming of chicken
        gravies and luscious paneer lababdar? Look no further.
      </p>

      {<Carousel array={foods} length={3} arrows={false} />}
    </section>
  );
};

export default Bestseller;
