import cx from "classnames";
import classes from "./IconCard.module.css";

const IconCard = (props) => {
  return (
    <div className={classes.menu__content}>
      {props.img && (
        <img src={props.img} alt="" className={classes.menu__img} />
      )}

      {props.svg && <i className={cx(props.svg, classes.icon)} />}

      {props.text && <span className={classes.menu__detail}>{props.text}</span>}
    </div>
  );
};

export default IconCard;
