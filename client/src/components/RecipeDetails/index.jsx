import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import style from "./index.module.css";

import { deleteRecipe, getRecipeById, getRecipes } from "../../redux/actions";

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
  const recipeDetails = useSelector(state => state.details)

  const [loading, setLoading] = useState(false);

  const funcDescription = () => {
    return { __html: recipeDetails?.description };
  };

  //Para redireccionarme una vez que envio el formulario
  const history = useHistory();

  const handdleDelete = (e) => {
    e.preventDefault();
    alert(
      `Are you sure do you want to delete your creation ? | Estas seguro que quieres eliminar tu receta ?`
    );
    dispatch(deleteRecipe(id));
    dispatch(getRecipes());
    history.push("/recipes");
  }

  return (
    <div className={style.content}>
      {loading ? (
        <div className={style.content}>
          <div>
            <button
              className={style.buttonDelete}
              onClick={(e) => handdleDelete(e)}
            >
              BORRAR RECETA
            </button>
          </div>

          <div className={style.contentRecipeDetails}>
            <h1 className={style.tituloNameRecipeDetails}>
              {recipeDetails?.name?.toUpperCase()}
            </h1>
            <img
              className={style.imgDetails}
              src={recipeDetails.image}
              alt="Not found"
            />

            <h3 className={style.tituloRecipeDetails}>DIETS | DIETAS:</h3>
            <h2 className={style.detalleRecipeDetails}>
              {recipeDetails?.diets?.map(diet => diet.name.toUpperCase() + ' - ')}
            </h2>
            <h3 className={style.tituloRecipeDetails}> SCORE | PUNTAJE:</h3>
            <h2 className={style.detalleRecipeDetails}>
              {recipeDetails?.score}
            </h2>

            <h3 className={style.tituloRecipeDetails}>
              DISH TYPES | TIPO DE PLATO:
            </h3>
            {typeof recipeDetails?.dishes === "string" ? (
              <h2 className={style.detalleRecipeDetailsDish}>
                {recipeDetails?.dishes.toUpperCase()}
              </h2>
            ) : (
              recipeDetails?.dishes?.map((elem) => (
                <h2>
                  <ul className={style.detalleRecipeDetailsDish}>
                    <li key={elem}>{elem.toUpperCase()}</li>
                  </ul>
                </h2>
              ))
            )}
            <h3 className={style.tituloRecipeDetails}>
              HEALTHY | PUNTAJE SALUDABLE:
            </h3>
            <h2 className={style.detalleRecipeDetails}>
              {recipeDetails?.healthy}
            </h2>
            <h3 className={style.tituloRecipeDetails}>
              DESCRIPTION | DESCRIPCION:
            </h3>
            <h3
              className={style.detalleRecipeDescription}
              dangerouslySetInnerHTML={funcDescription()}
            ></h3>
            <h3 className={style.tituloRecipeDetails}>
              INSTRUCTIONS | INSTRUCCIONES:
            </h3>
             <ol>
              {recipeDetails?.steps?.map(s => s.map(s => {
                  return (
                    <li key={s} className={style.detalleRecipeSteps}>
                      {s}
                    </li>
                  )})
              )}
            </ol> 

          </div>
        </div>
      ) : (
        <div className={style.loading}></div>
      )}
      <Link to="/recipes">
        <button className={style.buttonVolver}>Volver | Go back</button>
      </Link>
    </div>
  );
}

export default RecipeDetails;
