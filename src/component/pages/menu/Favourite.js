import cx from "classnames";
import classes from "./Favourite.module.css";
import food from "../../data/food";
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
        <FavScroll array={food} length={3} arrows={true} />
      </div>
    </section>
  );
};

export default Testimonial;
