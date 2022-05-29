import cx from "classnames";
import Button from "../../UI/Button";
import classes from "./Update.module.css";

const Update = () => {
  return (
    <section
      className={cx(classes.about, classes.section, classes.bdContainer)}
      id="about"
    >
      <div className={cx(classes.about__container, classes.bdGrid)}>
        <div className={classes.about__data}>
          <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
            We cook the best <br />
            tasty food
          </h2>
          <p className={classes.about__description}>
            We believe in a good feed and great food! Follow us on Instagram to
            enjoy some friends and family homely moments.
          </p>
          <Button text={"Follow us"} />
        </div>
      </div>
    </section>
  );
};

export default Update;
