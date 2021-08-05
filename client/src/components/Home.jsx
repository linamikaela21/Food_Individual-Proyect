import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../actions/index";
import { RecipeDetails } from "./RecipeDetails";

import { URL_ADD_RECIPE, URL_ALL_RECIPES } from "../constantes";

export function Home() {
  //Para despachar mis acciones
  const dispatch = useDispatch();

  //Este Hooks es lo mismo que hacer el MapStateToPRops
  //Me estoy trayendo todo lo que esta en el estado de recipes
  const allRecipes = useSelector((state) => state.recipes);

  //Traigo del estado las recetas cuando el componente se monta
  //Este Hooks es lo mismo que hacer el MapDispatchToPRops
  //Nunca me tengo que olvidar el [] como el segundo parametro del useEffect para no generar un loop infinito
  //Dentro de [] puedo poner un state diciendo que necesito que este este state para que se ejecute el UseEffect sino no se ejecuta
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  //Para resetear las recetas en caso de que no se hallan cargado bien
  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <div className="content">
      <Link to={URL_ADD_RECIPE}>CREA TU PROPIA RECETA</Link>
      <div>
        <h1 className="title-home">Soy el titulo del HOME</h1>
      </div>
      <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Cargar de nuevo mis recetas
        </button>

        {/*El componente HOME ya trajo el estado inicial por ende exporto mi componente Details, 
          mapeo la info de mi state y la paso por props a RecipeDetails */}

        {
        allRecipes?.map((elem) => {
          return (
            <div className="Recipe">
              <Link to={URL_ALL_RECIPES + elem.id}>
                <RecipeDetails
                  key={elem.id}
                  name={elem.name}
                  diet={elem.diet}
                  score={elem.score}
                  description={elem.description}
                  healthy={elem.healthy}
                  steps={elem.steps}
                  image={elem.image}
                />
              </Link>
            </div>
          );
        })
        }
        
      </div>
    </div>
  );
}

export default Home;
