import "./SavedNewsHeader.css";

const user = "Elise";
const articleAmount = "5";

const SavedNewsHeader = () => {
  return (
    <div className="saved-news">
      <div className="saved-news__container">
        <div className="saved-news__title">Saved articles</div>
        <h1 className="saved-news__header">
          {user}, you have {articleAmount} saved <br></br>articles
        </h1>
        <div className="saved-news__keywords_container">
          <p className="saved-news__keywords_title">By keywords:</p>
          <p className="saved-news__keywords">
            Nature, Yellowstone, and 2 other
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavedNewsHeader;

//title? or OnSort and name//
