import cx from "classnames";
import classes from "./Bestseller.module.css";

import Carousel from "../../UI/Carousel";
import stickers from "../../data/stickers";
const Bestseller = () => {
  return (
    <section id="about">
      <div className={classes.grid}>
        <div className={classes.g1}>
          <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
            Our <br /> bestsellers
          </h2>
          <p className={classes.about__description}>
            Thinking of ghar jaisi Paneer Tikka Sashlik? Or Dreaming of chicken
            gravies and luscious paneer lababdar? Look no further.
          </p>
        </div>
        <div className={classes.g2}>
          {<Carousel array={stickers} length={4} arrows={false} />}
        </div>
      </div>
    </section>
  );
};

export default Bestseller;
