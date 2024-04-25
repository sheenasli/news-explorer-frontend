import "./SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";

// const articleAmount = "5";

const SavedNewsHeader = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  //article owner
  //savedarticle array amount
  const userArticles = savedArticles.filter(
    (article) => article.owner === currentUser._id
  );

  //keyword array
  const keywordArray = userArticles.map((article) => article.keyword);
  const getKeywordString = (keywords) => {
    if (keywordArray.length === 0) {
      return "";
    }
    if (keywordArray.length === 1) {
      return `${keywordArray}`;
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
        return `${sortedKeywordArray[0][0]}`;
      } else if (sortedKeywordArray.length === 2) {
        return `${sortedKeywordArray[0][0]} and ${sortedKeywordArray[1][0]}`;
      } else {
        return `${sortedKeywordArray[0][0]}, ${sortedKeywordArray[1][0]}, and ${
          sortedKeywordArray.length - 2
        } more`;
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
