import headerLogoWhite from "../../images/NewsExplorerWhite.svg";
import "./Header.css";

const Header = () => {
  console.log("Header");

  return (
    <header className="header">
      <div>
        <div>
          <img src={headerLogoWhite} alt="White Logo" />
        </div>
      </div>
      <div className="header__button-container">
        <div>
          <button type="text">Home</button>
        </div>
        <div>
          <button type="text">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
