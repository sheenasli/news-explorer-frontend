import NotFoundImage from "../../images/not-found_v1.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src={NotFoundImage}
        className="not-found__image"
        alt="Not Found Image"
      />
      <h1 className="not-found__header">Nothing Found</h1>
      <p className="not-found__content">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
};

export default NotFound;
