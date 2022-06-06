import classes from "./MenuCard.module.css";
function MenuCard(props) {
  return (
    <div>
      <div className={classes.menu__content}>
        {props.image && (
          <img
            src={props.image}
            alt={props.name}
            className={classes.menu__img}
          />
        )}

        {props.name && (
          <span className={classes.menu__detail}>{props.name}</span>
        )}
      </div>
    </div>
  );
}

export default MenuCard;
