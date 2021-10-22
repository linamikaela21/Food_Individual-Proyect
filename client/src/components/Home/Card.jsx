import style from "./Card.module.css";

const Card = ({ name, diets, image }) => {
  return (
    <div className={style.cardRecipe}>
      <div className={style.nameRecipeDiv}><h2 className={style.nameRecipe}> {name?.toUpperCase()} </h2></div>
      <div className={style.dietsRecipeDiv}>
        <ul className={style.dietsRecipe}>
         {diets?.map(diet => (
           <li key={diet.name}> {diet.name.toUpperCase()} </li>
         )
         )}
      </ul>
      </div>
      <img
        className={style.imgRecipe}
        src={image}
        alt="No encontrada / Not found"
        title={name}
      />
    </div>
  );
};

export default Card;
