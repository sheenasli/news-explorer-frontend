import { Link } from "react-router-dom";
import headerLogoWhite from "../../images/NewsExplorerWhite.svg";
import "./Header.css";

const Header = ({ handleRegisterModal, handleLoginModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={headerLogoWhite} alt="White Logo" />
        </Link>
      </div>

      <div className="header__button-container">
        <Link to="/">
          <button className="header__button_home" type="text">
            Home
          </button>
        </Link>

        <button
          className="header__button_signin"
          type="text"
          onClick={handleLoginModal}
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
