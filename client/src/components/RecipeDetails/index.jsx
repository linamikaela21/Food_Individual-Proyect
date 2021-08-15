import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./index.module.css";

import { getRecipeById } from "../../actions";

export function RecipeDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();
  //Si le paso props a RecipeDetails puedo hacerlo asi
  // const {id} = props.match.params;

  useEffect(() => {
    dispatch(getRecipeById(id));
    setLoading(true);
  }, [id, dispatch]);

  //Me traigo el estado desde el reducer
  const recipeDetails = useSelector((state) => state.details);

  const [loading, setLoading] = useState(false);

  const funcDescription = () => {
    return { __html: recipeDetails?.description };
  };

  return (
    <div className={style.content}>
      {loading ? (
        <div className={style.contentRecipeDetails}>
          <h1 className={style.tituloNameRecipeDetails}>
            {recipeDetails?.name?.toUpperCase()}
          </h1>
          <img
            className="imgDetails"
            src={recipeDetails.image}
            alt="Not found"
            width="500"
            height="500"
          />

          <h3 className={style.tituloRecipeDetails}>DIETS / DIETAS:</h3>
          <h2 className={style.detalleRecipeDetails}>
            {recipeDetails?.diets?.map((elem) => elem.toUpperCase() + " - ")}
          </h2>
          <h3 className={style.tituloRecipeDetails}> SCORE / PUNTAJE:</h3>
          <h2 className={style.detalleRecipeDetails}>
            {recipeDetails?.score}{" "}
          </h2>
          <h3 className={style.tituloRecipeDetails}>
            DISH TYPES / TIPO DE PLATO:
          </h3>
          <h2 className={style.detalleRecipeDetails}>
            {typeof recipeDetails?.dishes === "string"
              ? recipeDetails?.dishes.toUpperCase()
              : recipeDetails?.dishes?.map(
                  (elem) => elem.toUpperCase() + " - "
                )}
          </h2>
          <h3 className={style.tituloRecipeDetails}>
            HEALTHY / PUNTAJE SALUDABLE:
          </h3>
          <h2 className={style.detalleRecipeDetails}>
            {recipeDetails?.healthy}
          </h2>
          <h3 className={style.tituloRecipeDetails}>
            DESCRIPTION / DESCRIPCION:
          </h3>
          <h3
            className={style.detalleRecipeDescription}
            dangerouslySetInnerHTML={funcDescription()}
          ></h3>
          <h3 className={style.tituloRecipeDetails}>
            INSTRUCTIONS / INSTRUCCIONES:
          </h3>

          <ol>
            {typeof recipeDetails?.steps === "string"
              ? <ul><li key={recipeDetails.step} className={style.detalleRecipeSteps}>{recipeDetails?.steps}</li></ul> 
              : recipeDetails?.steps?.map((s) => {
                  return (
                    <li key={s.step} className={style.detalleRecipeSteps}>
                      {" "}
                      {s.step}{" "}
                    </li>
                  );
                })}
          </ol>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/recipes">
        <button className={style.buttonVolver}>Volver / Go back</button>
      </Link>
    </div>
  );
}

export default RecipeDetails;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import style from './index.module.css'

// import { URL_ALL_RECIPES } from "../../constantes";

// export function RecipeDetails () {

//   const [recipeDetails, setrecipeDetails] = useState({});

//   const { id } = useParams();

//   function getRecipesById(id) {
//     axios(URL_ALL_RECIPES + id).then((recipe) => {
//       setrecipeDetails(recipe.data);
//     });
//   }

//   useEffect(() => {
//     getRecipesById(id);
//   }, [])

//    const funcDescription = () => {
//   return  {__html: recipeDetails.description};
//  }
//   return (
//   <div className={style.content}>
//     <div className={style.contentRecipeDetails}>
//         <h1 className={style.tituloNameRecipeDetails}> {recipeDetails.name} </h1>
//         <img

//         className="imgDetails"
//         src={recipeDetails.image}
//         alt="Not found"
//         width="400"
//         height="400"
//       />
//         <h3 className={style.tituloRecipeDetails}>DIETS / DIETAS:</h3>
//       <h3 className={style.detalleRecipeDetails}> {recipeDetails.diets} </h3>
//       <h3 className={style.tituloRecipeDetails}> SCORE / PUNTAJE:</h3>
//       <h3 className={style.detalleRecipeDetails}>{recipeDetails.score} </h3>
//       <h3 className={style.tituloRecipeDetails}> HEALTHY / PUNTAJE SALUDABLE:</h3>
//       <h3 className={style.detalleRecipeDetails}> {recipeDetails.healthy} </h3>
//       <h3 className={style.tituloRecipeDetails}>DESCRIPTION / DESCRIPCION: </h3>
//       <h4 className={style.detalleRecipeDetails} dangerouslySetInnerHTML={funcDescription()}></h4>
//       <h4 className={style.tituloRecipeDetails}>INSTRUCTIONS / INSTRUCCIONES: </h4>
//       <h4 className={style.detalleRecipeDetails}> {recipeDetails.steps} </h4>
//       </div>
//   <Link to='/recipes'><button className={style.buttonVolver}>Volver / Go back</button></Link>
// </div>
// )

// }

// export default RecipeDetails;
