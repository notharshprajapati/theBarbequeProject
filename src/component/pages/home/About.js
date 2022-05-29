import cx from "classnames";
import classes from "./About.module.css";
import about from "../../img/about.jpg";
import Button from "../../UI/Button";

const About = () => {
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
            We are strong believers in the importance of home-style food. Do you
            remember coming back from school to the aroma of fresh dal tadka
            made by mom? Do you fondly think of Amma's curd rice cooling you
            down during the good 'ol summer holidays? We know you do!
          </p>{" "}
          <p className={classes.about__description}>
            We at homely strive to bring back that home-like comfort and taste
            in your food. So all you miss is mom herself and not her cooking!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
