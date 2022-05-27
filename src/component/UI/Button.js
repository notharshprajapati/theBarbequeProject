import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <a href={props.link} className={classes.button}>
      {props.text}
    </a>
  );
};

export default Button;
