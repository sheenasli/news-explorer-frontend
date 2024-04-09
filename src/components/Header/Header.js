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
    <header
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
          className="header__button-home"
          type="text"
          activeClassName="header__button-active"
        >
          Home
        </NavLink>
        <NavLink to="/saved-news" className="header__button-saved-articles">
          Saved articles
        </NavLink>

        <button
          className="header__button-loggedin"
          type="text"
          onClick={onLogout}
        >
          <p className="header__username">{currentUser.name}</p>
          <img src={logoutWhite} alt="logout" className="header__logout" />
        </button>
      </nav>
    </header>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <header
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
          className="header__savednews-button-home"
          type="text"
        >
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className="header__savednews-saved-articles"
          activeClassName="header__button-active"
        >
          Saved articles
        </NavLink>

        <button
          className="header__savednews-username"
          type="text"
          onClick={onLogout}
        >
          <p className="header__username">{currentUser.name}</p>
          <img src={logoutBlack} alt="logout" className="header__logout" />
        </button>
      </nav>
    </header>
  ) : (
    <header
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
          className="header__button-home"
          type="text"
          activeClassName="header__button-active"
        >
          Home
        </NavLink>
        <button className="header__button-signin" type="text" onClick={onLogin}>
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
