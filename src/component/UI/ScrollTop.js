import classes from "./ScrollTop.module.css";

const ScrollTop = () => {
  return (
    // <h1>hi</h1>
    <a href="#home" className={classes.scrolltop} id="scroll-top">
      <i class="bx bx-chevron-up scrolltop__icon"></i>
    </a>
  );
};

export default ScrollTop;
