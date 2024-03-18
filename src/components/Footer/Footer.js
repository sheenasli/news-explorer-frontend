import "./Footer.css";
import FacebookIcon from "../../images/icon-facebook.svg";
import GithubIcon from "../../images/icon-github.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &#169; {currentYear} Supersite, Powered by News API{" "}
      </p>

      <div className="footer__buttons">
        <button className="footer__button" type="text">
          Home
        </button>
        <button className="footer__button" type="text">
          TripleTen
        </button>

        <div className="footer__icons">
          <img
            src={GithubIcon}
            className="footer__icon-button"
            alt="Github Icon"
          />
          <img
            src={FacebookIcon}
            className="footer__icon-button"
            alt="Facebook Icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
