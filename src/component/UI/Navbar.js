import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="lHeader" id="header">
      <nav className="nav bdContainer">
        <a href="#home" className="nav__logo">
          The Barbeque Project
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav__link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav__link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav__link"
                }
              >
                Menu
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav__link"
                }
              >
                Order
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/review"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav__link"
                }
              >
                Review Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav__link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav__item">
              <i class="bx bx-moon change-theme" id="theme-button"></i>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
