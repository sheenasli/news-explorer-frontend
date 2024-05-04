import "./SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";

const SavedNewsHeader = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  //savedarticle array amount
  const userArticles = savedArticles.filter(
    (article) => article.owner === currentUser._id
  );

  //keyword array
  const keywordArray = userArticles.map((article) => article.keyword);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getKeywordString = (keywords) => {
    if (keywordArray.length === 0) {
      return "";
    }
    if (keywordArray.length === 1) {
      return `${capitalizeFirstLetter(keywordArray[0])}`;
    }
    if (keywordArray.length > 1) {
      const count = {};
      for (let keyword of keywords) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }

      //sort the array, style
      const sortedKeywordArray = [];
      for (const item in count) {
        sortedKeywordArray.push([item, count[item]]);
      }
      sortedKeywordArray.sort((a, b) => {
        return b[1] - a[1];
      });

      if (sortedKeywordArray.length === 1) {
        return `${capitalizeFirstLetter(sortedKeywordArray[0][0])}`;
      } else if (sortedKeywordArray.length === 2) {
        return `${capitalizeFirstLetter(
          sortedKeywordArray[0][0]
        )} and ${capitalizeFirstLetter(sortedKeywordArray[1][0])}`;
      } else {
        const firstKeywords = sortedKeywordArray
          .slice(0, 2)
          .map((keyword) => capitalizeFirstLetter(keyword[0]))
          .join(", ");
        const moreCount = sortedKeywordArray.length - 2;
        return `${firstKeywords}, and ${moreCount} more`;
      }
    } else {
      return null;
    }
  };

  const keywordString = getKeywordString(keywordArray);

  return (
    <div className="saved-news">
      <div className="saved-news__container">
        <div className="saved-news__title">Saved articles</div>
        <h1 className="saved-news__header">
          {currentUser.name}, you have {userArticles.length} saved article
          {userArticles.length !== 1 ? "s" : ""}
        </h1>
        <div className="saved-news__keywords-container">
          <p className="saved-news__keywords-title">By keywords:</p>
          <p className="saved-news__keywords">{keywordString}</p>
        </div>
      </div>
    </div>
  );
};

export default SavedNewsHeader;
