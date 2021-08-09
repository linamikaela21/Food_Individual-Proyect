<<<<<<< HEAD
import style from "./Card.module.css";

//MODIFICAR CSS
const Card = ({ name, diet, image }) => {
  return (
      <div className={style.cardRecipe}>
        <h2 className={style.nameRecipe}> {name} </h2>
        <h3 className={style.dietRecipe}> {diet} </h3>
        <img
          className={style.imgRecipe}
          src={image}
          alt="No encontrada / Not found"
        />
      </div>
  );
};

export default Card;
