import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

const SavedNews = () => {
  return (
    <section className="saved-news__section">
      <SavedNewsHeader />
      <NewsCardList />
    </section>
  );
};

export default SavedNews;
