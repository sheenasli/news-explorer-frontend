import "./NewsCard.css";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";
import { KeywordContext } from "../../contexts/KeywordContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NewsCard = ({
  onSignUp,
  newsData,
  handleSaveArticle,
  handleRemoveArticle,
}) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { keyword } = useContext(KeywordContext);
  const { savedArticles } = useContext(SavedArticlesContext);
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  const formattedDate = new Date(
    newsData.publishedAt || newsData.date
  ).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleBookmarkClick = () => {
    const token = localStorage.getItem("jwt");
    handleSaveArticle({ newsData, keyword, token });
  };

  const handleRemoveClick = () => {
    const token = localStorage.getItem("jwt");
    handleRemoveArticle({ newsData, token });
  };

  return (
    <div className="card_container">
      {currentPage === "/saved-news" && (
        <>
          <div className="card__keyword">{newsData.keyword}</div>

          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text_hidden"
            }`}
          >
            Remove from saved
          </div>
          <button
            className="card__button-delete"
            onClick={handleRemoveClick}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      )}

      {isLoggedIn && currentPage === "/" ? (
        <button
          className={`card__button-bookmark ${
            savedArticles.some(
              (savedArticle) => savedArticle.link === newsData.url
            )
              ? "card__button-bookmark_marked"
              : ""
          }`}
          onClick={handleBookmarkClick}
        />
      ) : (
        ""
      )}
      {!isLoggedIn && (
        <>
          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text_hidden"
            }`}
          >
            Sign in to save articles
          </div>
          <button
            className="card__button-bookmark"
            onClick={onSignUp}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
        </>
      )}

      <img
        src={newsData.image || newsData.urlToImage}
        alt={newsData.link || newsData.url}
        className="card_image"
      />
      <div className="card__text">
        <p className="card__text_date-published">{formattedDate} </p>
        <h3 className="card__text_title">{newsData.title} </h3>
        <p className="card__text_content">
          {newsData.text || newsData.description}
        </p>
        <p className="card__text_source">
          {newsData.source.name || newsData.source}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
