import cx from "classnames";
import classes from "./FakeNavbar.module.css";

const FakeNavbar = () => {
  return (
    <div>
      <header className={classes.lHeader} id="header">
        <nav className={cx(classes.nav, classes.bdContainer)}>
          <a href="#home" className={classes.nav__logo}>
            The Barbeque Project
          </a>

          <div className={classes.nav__menu} id="nav-menu">
            <ul className={classes.nav__list}>
              <li className={classes.nav__item}>
                <a href="#home" className={classes.nav__link}>
                  Home
                </a>
              </li>
              <li className={classes.nav__item}>
                <a href="#about" className={classes.nav__link}>
                  About
                </a>
              </li>
              <li className={classes.nav__item}>
                <a href="#services" className={classes.nav__link}>
                  Services
                </a>
              </li>
              <li className={classes.nav__item}>
                <a href="#menu" className={classes.nav__link}>
                  Menu
                </a>
              </li>
              <li className={classes.nav__item}>
                <a href="#contact" className={classes.nav__link}>
                  Contact us
                </a>
              </li>
              <li className={classes.nav__item}>
                <i class="bx bx-moon change-theme" id="theme-button"></i>
              </li>
            </ul>
          </div>

          <div className={classes.nav__toggle} id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default FakeNavbar;