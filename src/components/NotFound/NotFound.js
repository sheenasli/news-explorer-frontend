import NotFoundImage from "../../images/notfound.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <img src={NotFoundImage} alt="Not Found Image" />
      <h1>Nothing Found</h1>
      <p>Sorry, nothing matched your search.</p>
    </div>
  );
};

export default NotFound;
