import style from "./Card.moduless.css";

//MODIFICAR CSS
const Card = ({ name, diet, image }) => {
  return (
    // <div className="content-recipe">
      <div className={style.cardRecipe}>
        <h2 className={style.nameRecipe}> {name} </h2>
        <h3 className={style.dietRecipe}> {diet} </h3>
        <img
          className={style.imgRecipe}
          src={image}
          alt="Not found"
          width="250"
          height="250"
        ></img>
      </div>
    // </div>
  );
};

export default Card;
