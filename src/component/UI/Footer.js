import cx from "classnames";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={cx(classes.section, classes.bdContainer)}>
      <div className={cx(classes.footer__container, classes.bdGrid)}>
        <div className={classes.footer__content}>
          <a href="#home" className={classes.footer__logo}>
            Tasty Food
          </a>
          <span className={classes.footer__description}>Restaurant</span>
          <div>
            <a href="#home" className={classes.footer__social}>
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#home" className={classes.footer__social}>
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#home" className={classes.footer__social}>
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>

        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>Opening Hours</h3>
          <ul>
            <li>All days</li>
            <li>8AM - 11PM</li>
          </ul>
        </div>

        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>Quick Links</h3>
          <ul>
            <li>
              <a href="#homeHome" className={classes.footer__link}>
                Home
              </a>
            </li>
            <li>
              <a href="#home" className={classes.footer__link}>
                About
              </a>
            </li>
            <li>
              <a href="#home" className={classes.footer__link}>
                Menu
              </a>
            </li>
            <li>
              <a href="#home" className={classes.footer__link}>
                Review us
              </a>
            </li>
            <li>
              <a href="#home" className={classes.footer__link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>Information</h3>
          <ul>
            <li>
              <a href="#home" className={classes.footer__link}>
                Follow us
              </a>
            </li>
            <li>
              <a href="#home" className={classes.footer__link}>
                Locate Shop
              </a>
            </li>
            <li>
              <a href="#home" className={classes.footer__link}>
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#home" className={classes.footer__link}>
                Terms of services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className={classes.footer__copy}>
        {"\u00A9"} 2022 the barbeque project. All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
