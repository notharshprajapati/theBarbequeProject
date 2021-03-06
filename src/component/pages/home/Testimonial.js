import cx from "classnames";
import classes from "./Testimonial.module.css";
import ttm from "../../data/ttm.json";
import Carousel from "../../UI/Carousel";

const Testimonial = () => {
  return (
    <section
      className={cx(classes.about, classes.section, classes.bdContainer)}
      id="about"
    >
      <div className={classes.about__data}>
        <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
          Thank you for all the love
        </h2>
        <p className={classes.about__description}>
          We appreciate your pyaar-filled testimonials
        </p>
      </div>
      <div style={{ padding: "0 1rem 0 1rem" }}>
        <Carousel array={ttm} length={3} arrows={true} />
      </div>
    </section>
  );
};

export default Testimonial;
