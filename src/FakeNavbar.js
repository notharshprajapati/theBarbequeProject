//import "./FakeNavbar.css";
// import cx from "classnames";
import classes from "./FakeNavbar.css";

const FakeNavbar = () => {
  return (
    <div>
      <header className="lHeader" id="header">
        <nav className="nav bdContainer">
          <a href="#home" className="nav__logo">
            The Barbeque Project
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#menu" className="nav__link">
                  Menu
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact us
                </a>
              </li>

              <li>
                <i className="bx bx-moon change-theme" id="theme-button"></i>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default FakeNavbar;
