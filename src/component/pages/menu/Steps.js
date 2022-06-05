import cx from "classnames";
import classes from "./Steps.module.css";
import food from "../../data/food";

const Located = () => {
  return (
    <section className={cx(classes.section, classes.bdContainer)} id="about">
      <div className={cx(classes.about__container, classes.bdGrid)}>
        <div className={classes.about__data}>
          <h2 className={classes.sectionTitle}>
            Make your own Barbeque combo
            <br /> in Simple 2 steps!
          </h2>
        </div>
        <div className={classes.grid}>
          <div>
            <span className={classes.step}>Step 1:</span>
            <div className={classes.content}>
              <div>
                <img src={food[8]} alt="" className={classes.img} />
              </div>
              <div className={classes.detailContainer}>
                <span className={classes.detail}>
                  Choose portion of your favorite Food
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className={classes.step}>Step 2:</span>
            <div className={classes.content}>
              <div>
                <img src={food[6]} alt="" className={classes.img} />
              </div>
              <div className={classes.detailContainer}>
                <span className={classes.detail}>
                  Select your favorite Sauce
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Located;
