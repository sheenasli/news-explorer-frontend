import "./Header.css";
import headerLogoWhite from "../../images/NewsExplorerWhite.svg";
import headerLogoBlack from "../../images/NewsExplorerBlack.svg";
import logoutWhite from "../../images/logout-white.svg";
import logoutBlack from "../../images/logout-black.svg";
import { NavLink } from "react-router-dom";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ handleLoginModal, onLogout }) => {
  const { currentPage, activeModal } = useContext(CurrentPageContext);
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return isLoggedIn && currentPage === "/" ? (
    <div className="header">
      <div>
        <NavLink to="/">
          <img src={headerLogoWhite} alt="White Logo" />
        </NavLink>
      </div>
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
    <div className="header__savednews">
      <div>
        <NavLink to="/">
          <img src={headerLogoBlack} alt="Black Logo" />
        </NavLink>
      </div>
      <nav className="header__button-container">
        <NavLink exact to="/" className="header__button_home" type="text">
          Home
        </NavLink>
        <NavLink
          to="/saved-news"
          className="header__button_saved-articles"
          activeClassName="header__button_active"
        >
          Saved articles
        </NavLink>

        <button
          className="header__button_loggedin"
          type="text"
          onClick={onLogout}
        >
          <p className="header__username">{currentUser.name}</p>
          <img src={logoutBlack} alt="logout" className="header__logout" />
        </button>
      </nav>
    </div>
  ) : (
    <div className="header">
      <div>
        <NavLink to="/">
          <img src={headerLogoWhite} alt="White Logo" />
        </NavLink>
      </div>
      <nav className="header__button-container">
        <NavLink
          to="/"
          className="header__button_home"
          type="text"
          activeClassName="header__button_active"
        >
          Home
        </NavLink>
        <button
          className="header__button_signin"
          type="text"
          onClick={handleLoginModal}
        >
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default Header;
