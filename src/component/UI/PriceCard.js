import classes from "./PriceCard.module.css";

const PriceCard = (props) => {
  return (
    <div className={classes.menu__content}>
      <img src={props.img} alt="" className={classes.menu__img} />
      <span className={classes.menu__detail}>{props.text}</span>
    </div>
  );
};

export default PriceCard;
