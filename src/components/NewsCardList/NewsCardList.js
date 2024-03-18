import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

import { defaultNewsCards } from "../NewsCard/NewsCard";

const NewsCardList = () => {
  return (
    <section className="card_section" id="card-section">
      <div className="card_list">
        {defaultNewsCards.map((card) => (
          <NewsCard card={card} key={card._id} />
        ))}
      </div>
    </section>
  );
};

export default NewsCardList;

//rendering of cards on pages and their amount//
