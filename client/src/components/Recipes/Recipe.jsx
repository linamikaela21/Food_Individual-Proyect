import "./Recipe.css";

const Recipe = ({ name, diet, image }) => {
  return (
    // <div className="content-recipe">
      <div className="card-recipe">
        <h2 className="name-recipe"> {name} </h2>
        <h3 className="diet-recipe"> {diet} </h3>
        <img
          className="img-recipe"
          src={image}
          alt="Not found"
          width="250"
          height="250"
        ></img>
      </div>
    // </div>
  );
};

export default Recipe;
