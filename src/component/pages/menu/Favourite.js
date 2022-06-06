import cx from "classnames";
import classes from "./Favourite.module.css";
import foods from "../../data/foods.json";
import FavScroll from "../../UI/FavScroll";

const Testimonial = () => {
  return (
    <section
      className={cx(classes.about, classes.section, classes.bdContainer)}
      id="about"
    >
      <div className={classes.about__data}>
        <h2 className={cx(classes.sectionTitle, classes.about__initial)}>
          Consumer favorites
        </h2>
      </div>
      <div style={{ padding: "0 5rem 0 5rem" }}>
        <FavScroll array={foods} length={3} arrows={true} />
      </div>
    </section>
  );
};

export default Testimonial;
