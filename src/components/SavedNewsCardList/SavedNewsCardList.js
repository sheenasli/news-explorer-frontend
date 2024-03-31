import "./SavedNewsCardList.css";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";

import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SavedNewsCardList = ({ handleRemoveArticle }) => {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="savednews-newscards">
      <div className="savednews-newscards__container">
        {savedArticles
          .filter((article) => article.owner === currentUser._id)
          .map((article) => (
            <NewsCard
              newsData={article}
              key={article.link}
              handleRemoveArticle={handleRemoveArticle}
            />
          ))}
      </div>
    </section>
  );
};

export default SavedNewsCardList;
