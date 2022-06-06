import classes from "./MenuCard.module.css";
import { motion } from "framer-motion";
function MenuCard(props) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
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
    </motion.div>
  );
}

export default MenuCard;
