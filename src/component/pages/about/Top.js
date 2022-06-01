import cx from "classnames";
import classes from "./Top.module.css";
import home from "../../img/home.png";

const Top = () => {
  return (
    <section className={classes.home} id="home">
      <div
        className={cx(
          classes.home__container,
          classes.bdContainer,
          classes.bdGrid
        )}
      >
        <div className={classes.home__data}>
          <h1 className={classes.home__title}>Review Us</h1>
          <h2 className={classes.home__subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            massa ultricies mi quis.
          </h2>
        </div>

        <img src={home} alt="" className={classes.home__img} />
      </div>
    </section>
  );
};

export default Top;
