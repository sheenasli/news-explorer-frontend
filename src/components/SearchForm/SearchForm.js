import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="searchform">
      <section className="searchform__header">
        <div className="searchform__text-heading">
          What's going on in<br></br>the world?
        </div>
        <div className="searchform__text-subheading">
          Find the latest news on any topic and save them in your personal
          account.
        </div>
      </section>

      <section className="searchform__searchbar">
        <input
          className="searchform__searchbar-input"
          placeholder="Enter topic"
        />
        <button className="searchform__searchbar-button" type="submit">
          Search
        </button>
      </section>
    </div>
  );
};

export default SearchForm;
