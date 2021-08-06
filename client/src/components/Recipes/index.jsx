import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getRecipes } from "../../actions/index";

import Recipe from "./Recipe";
import Paginado from '../Paginado/'
import SearchBar from "../SerchBar";

export function Recipes() {
  //Para despachar mis acciones
  const dispatch = useDispatch();

  //Este Hooks es lo mismo que hacer el MapStateToPRops
  //Me estoy trayendo todo lo que esta en el estado de recipes
  const allRecipes = useSelector((state) => state.recipes);

  //Esta es mi logica del paginado
  //El estado de mi pagina actual que empieza en Pagina 1
  const [currentPage, setCurrentPage] = useState(1)
  //Cuantas recetas quiero por pagina => 9
    const [recipesPerPage, setRecipesPerPage] = useState(6)
    //La posicion de mi ultima receta
    const indexLastRecipe = currentPage * recipesPerPage
     //La posicion de mi primer receta
    const indexFirstRecipe = indexLastRecipe - recipesPerPage
    //Me guardo la cuales son las recetas a renderizar dependiendo la pagina en donde estoy
    const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


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
      <Link to='/recipes/makeRecipe'>CREA TU PROPIA RECETA</Link>
      <div>
        <h1 className="title-home">Soy el titulo del HOME</h1>
      </div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Volver a cargar todas las recetas
        </button>

        <div>
          <Paginado
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
          />
          <SearchBar />
        </div>

        {/*El componente RECIPES ya trajo el estado inicial por ende exporto mi componente Recipe, 
          mapeo la info de mi state y la paso por props a Recipe */}

        {
        currentRecipes?.map((elem) => {
          return (
            <div className="Recipe">
              <Link to={`/recipes/${elem?.id}`}>
                <Recipe
                  key={elem?.id}
                  name={elem?.name}
                  diet={elem?.diets}
                  score={elem?.score}
                  description={elem?.description}
                  healthy={elem?.healthy}
                  steps={elem?.steps}
                  image={elem?.image}
                />
              </Link>
            </div>
          );
        })
        }
        
      </div>
  );
}

export default Recipes;
