import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";

import logoutWhite from "../../images/logout-white.svg";
import logoutBlack from "../../images/logout-black.svg";

const MobileMenu = ({ onLogin, onLogout }) => {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);

  return isLoggedIn && currentPage === "/" ? (
    <div className="mobile">
      <div className="mobile__content">
        <nav className="mobile__links">
          <NavLink to="/" className="mobile__link">
            Home
          </NavLink>
          <NavLink to="/saved-news" className="mobile__link">
            Saved articles
          </NavLink>
        </nav>
        <button className="mobile__button-loggedin" onClick={onLogout}>
          <p className="mobile__username-loggedin">{currentUser.name}</p>
          <img src={logoutWhite} alt="logout" className="mobile__logout" />
        </button>
      </div>
    </div>
  ) : isLoggedIn && currentPage === "/saved-news" ? (
    <div className="mobile">
      <div className="mobile__content-savednews">
        <nav className="mobile__links">
          <NavLink to="/" className="mobile__link-savednews">
            Home
          </NavLink>
          <NavLink to="/saved-news" className="mobile__link-savednews">
            Saved articles
          </NavLink>
        </nav>
        <button className="mobile__button-savednews" onClick={onLogout}>
          <p className="mobile__username-savednews">{currentUser.name}</p>
          <img
            src={logoutBlack}
            alt="logout"
            className="mobile__logout-savednews"
          />
        </button>
      </div>
    </div>
  ) : (
    <div className="mobile">
      <div className="mobile__content">
        <nav className="mobile__links">
          <NavLink
            to="/"
            className="mobile__link"
            activeClassName="mobile__link_active"
          >
            Home
          </NavLink>
        </nav>
        <button className="mobile__button" onClick={onLogin}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
