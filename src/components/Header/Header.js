import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import headerLogoWhite from "../../images/NewsExplorerWhite.svg";
import headerLogoBlack from "../../images/NewsExplorerBlack.svg";
import logoutWhite from "../../images/logout-white.svg";
import logoutBlack from "../../images/logout-black.svg";
import { NavLink } from "react-router-dom";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { MobileContext } from "../../contexts/MobileContext";
import { useContext } from "react";

const Header = ({ onLogin, onLogout }) => {
  const { currentPage, activeModal } = useContext(CurrentPageContext);
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const { mobileMenuOpen, openMobileMenu, closeMobileMenu } =
    useContext(MobileContext);

  const handleMobileMenu = () => {
    if (mobileMenuOpen === false) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  return isLoggedIn && currentPage === "/" ? (
    <div
      className={`header ${mobileMenuOpen === true ? "header__menu-open" : ""}`}
    >
      <div>
        <NavLink to="/">
          <img
            src={headerLogoWhite}
            className="header__logo"
            alt="White Logo"
          />
        </NavLink>
      </div>
      <button
        className={`header__menu-button ${
          mobileMenuOpen === true ? "header__menu-button_open" : ""
        }`}
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && <MobileMenu onLogin={onLogin} onLogout={onLogout} />}
      <nav className="header__button-container">
        <NavLink
          to="/"
          className="header__button_home"
          type="text"
          activeClassName="header__button_active"
        >
          Home
        </NavLink>
        <NavLink to="/saved-news" className="header__button_saved-articles">
          Saved articles
        </NavLink>

        <button
          className="header__button_loggedin"
          type="text"
          onClick={onLogout}
        >
          <p className="header__username">{currentUser.name}</p>
          <img src={logoutWhite} alt="logout" className="header__logout" />
        </button>
      </nav>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div
      className={`header__savednews ${
        mobileMenuOpen ? "header__savednews-open" : ""
      }`}
    >
      <div>
        <NavLink to="/">
          <img src={headerLogoBlack} alt="Black Logo" />
        </NavLink>
      </div>
      <button
        className="header__savednews-menu-button"
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && <MobileMenu onLogin={onLogin} onLogout={onLogout} />}
      <nav className="header__button-container">
        <NavLink
          exact
          to="/"
          className="header__savednews_button-home"
          type="text"
        >
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className="header__savednews_saved-articles"
          activeClassName="header__button_active"
        >
          Saved articles
        </NavLink>

        <button
          className="header__savednews_username"
          type="text"
          onClick={onLogout}
        >
          <p className="header__username">{currentUser.name}</p>
          <img src={logoutBlack} alt="logout" className="header__logout" />
        </button>
      </nav>
    </div>
  ) : (
    <div
      className={`header ${mobileMenuOpen === true ? "header__menu-open" : ""}`}
    >
      <div>
        <NavLink to="/">
          <img src={headerLogoWhite} alt="White Logo" />
        </NavLink>
      </div>

      <button
        className={`header__menu-button ${
          activeModal !== "" ? "header__menu-button_hidden" : ""
        } ${mobileMenuOpen === true ? "header__menu-button_open" : ""}`}
        onClick={handleMobileMenu}
      />
      {mobileMenuOpen && <MobileMenu onLogin={onLogin} onLogout={onLogout} />}

      <nav className="header__button-container">
        <NavLink
          to="/"
          className="header__button_home"
          type="text"
          activeClassName="header__button_active"
        >
          Home
        </NavLink>
        <button className="header__button_signin" type="text" onClick={onLogin}>
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Header;
