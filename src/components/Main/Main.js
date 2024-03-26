import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import { useContext } from "react";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";
import { SearchResultContext } from "../../contexts/SearchResultContext";
import NewsCardList from "../NewsCardList/NewsCardList";
import NotFound from "../NotFound/NotFound";

const Main = ({
  isLoading,
  searchError,
  handleSearch,
  onSignUp,
  handleSaveArticle,
  handleRemoveArticle,
}) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultContext);

  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch} />
      <div>
        {hasSearched && searchResults.length > 0 ? (
          <NewsCardList
            onSignUp={onSignUp}
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
          />
        ) : hasSearched && searchResults.length === 0 ? (
          <NotFound />
        ) : isLoading ? (
          <Preloader />
        ) : searchError === true ? (
          <p>
            Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. Please try again later.
          </p>
        ) : (
          ""
        )}
      </div>
      <About />
    </main>
  );
};

export default Main;
