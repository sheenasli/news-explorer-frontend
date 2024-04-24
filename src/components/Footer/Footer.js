import "./Footer.css";
import LinkedinIcon from "../../images/icon-linkedin.svg";
import GithubIcon from "../../images/icon-github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &#169; {currentYear} Supersite, Powered by News API{" "}
      </p>

      <div className="footer__links">
        <div className="footer__buttons">
          <Link to="/">
            <a
              className="footer__button"
              href="https://www.newsexplorer.spacegas.com"
              target="_self"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </Link>
          <a
            className="footer__button"
            href="https://www.tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__icons">
          <a
            href="https://www.github.com/sheenasli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              className="footer__icon-button"
              alt="Github Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sheena-irvin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              className="footer__icon-button"
              alt="Facebook Icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
