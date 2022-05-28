import cx from "classnames";
import classes from "./Bestseller.module.css";
import about from "../../img/about.jpg";
import Button from "../../UI/Button";

const Bestseller = () => {
  return (
    <section
      className={cx(classes.about, classes.section, classes.bdContainer)}
      id="about"
    >
      <div className={cx(classes.about__container, classes.bdGrid)}>
        <div className={classes.about__data}>
          <span className={cx(classes.sectionSubtitle, classes.about__initial)}>
            About us
          </span>
          <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
            We cook the best <br />
            tasty food
          </h2>
          <p className={classes.about__description}>
            We cook the best food in the entire city, with excellent customer
            service, the best meals and at the best price, visit us.
          </p>
          <Button link="#about" text="Explore history" />
        </div>

        <img src={about} alt="" className={classes.about__img} />
      </div>
    </section>
  );
};

export default Bestseller;
