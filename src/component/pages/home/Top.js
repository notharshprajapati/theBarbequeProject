import cx from "classnames";
import classes from "./Top.module.css";
import home from "../../img/home.png";
import Button from "../../UI/Button";

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
          <h1 className={classes.home__title}>Tasty food</h1>
          <h2 className={classes.home__subtitle}>
            Try the best food of <br />
            the week.
          </h2>
          <Button link="#about" text="Order" />
        </div>

        <img src={home} alt="" className={classes.home__img} />
      </div>
    </section>
  );
};

export default Top;
