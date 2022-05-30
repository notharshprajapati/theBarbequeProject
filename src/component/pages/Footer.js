import cx from "classnames";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section bdContainer">
      <div className="footer__container bdGrid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            Tasty Food
          </a>
          <span className="footer__description">Restaurant</span>
          <div>
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Opening Hours</h3>
          <ul>
            <li>All days</li>
            <li>8AM - 11PM</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Quick Links</h3>
          <ul>
            <li>
              <a href="#Home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Review us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Information</h3>
          <ul>
            <li>
              <a href="#" className="footer__link">
                Follow us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Locate Shop
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Terms of services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">&#169; 2020 Bedimcode. All right reserved</p>
    </footer>
  );
};
export default Footer;