import "./NewsCard.css";

//move to api.js file//
// const source = (data) => {
//   data.source.name;
//   return source;
// };

export const defaultNewsCards = [
  {
    _id: 1,
    title: "news 1",
    publishedAt: "November 4, 2020",
    description: "Lorem ipsum dolor sit amet",
    source: "Nat Geo",
    urlToImage:
      "https://images.unsplash.com/photo-1708804309492-5ef3f3458c33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2,
    title: "news 2",
    publishedAt: "November 4, 2020",
    description: "Lorem ipsum dolor sit amet",
    source: "Nat Geo",
    urlToImage:
      "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 3,
    title: "news 3",
    publishedAt: "November 4, 2020",
    description:
      "vLorem ipsum dolor sit amet vLorem ipsum dolor sit amet vLorem ipsum dolor sit amet vLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet test lkjsgkd lsdkjlsdk",
    source: "Nat Geo",
    urlToImage:
      "https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 4,
    title: "News 3- Hi this is the title of this news card",
    publishedAt: "November 4, 2020",
    description:
      "vLorem ipsum dolor sit amet vLorem ipsum dolor sit amet vLorem ipsum dolor sit amet vLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet test lkjsgkd lsdkjlsdk",
    source: "Nat Geo",
    urlToImage:
      "https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
  },
];

const NewsCard = ({ card }) => {
  return (
    <div className="card_container">
      <img src={card.urlToImage} className="card_image" />
      <div className="card__text">
        <div className="card__text_date-published">{card.publishedAt} </div>
        <div className="card__text_name">{card.title} </div>
        <div className="card__text_content">{card.description}</div>
        <div className="card__text_source">{card.source} </div>
      </div>
    </div>
  );
};

export default NewsCard;
