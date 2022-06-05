import classes from "./FavCard.module.css";

const FavCard = (props) => {
  return (
    <div className={classes.menu__content}>
      {props.img && (
        <img src={props.img} alt={props.text} className={classes.menu__img} />
      )}

      {props.text && <span className={classes.menu__detail}>{props.text}</span>}
    </div>
  );
};

export default FavCard;
