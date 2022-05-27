import cx from "classnames";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.lheader} id="header">
      <nav className={cx(classes.nav, classes.bdContainer)}>
        <div className={classes.nav__menu} id="nav-menu">
          <ul className={classes.nav__list}>
            <li className={classes.nav__item}>
              <a
                href="#home"
                className={cx(classes.nav__link, classes.activeLink)}
              >
                Home
              </a>
            </li>
            <li classNameclassName={classes.nav__item}>
              <a href="#about" className={classes.nav__link}>
                About
              </a>
            </li>
            <li classNameclassName={classes.nav__item}>
              <a href="#services" className={classes.nav__link}>
                Services
              </a>
            </li>
            <li classNameclassName={classes.nav__item}>
              <a href="#menu" className={classes.nav__link}>
                Menu
              </a>
            </li>
            <li classNameclassName={classes.nav__item}>
              <a href="#contact" className={classes.nav__link}>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
