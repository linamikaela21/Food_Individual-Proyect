import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import style from "./index.module.css";

import {
  getRecipes,
  orderRecipeByName,
  orderRecipeByDiet,
  orderRecipeByScore,
} from "../../actions/index";

import Card from "./Card";
import Paginado from "../Paginado";
import SearchBar from "../SearchBar";
import Footer from "../Footer";

export function Home() {
  //Para despachar mis acciones
  const dispatch = useDispatch();

  //Este Hooks es lo mismo que hacer el MapStateToPRops
  //Me estoy trayendo todo lo que esta en el estado de recipes
  const allRecipes = useSelector((state) => state.recipes);

  //Esta es mi logica del paginado
  //El estado de mi pagina actual que empieza en Pagina 1
  const [currentPage, setCurrentPage] = useState(1);
  //Cuantas recetas quiero por pagina => 9
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  //La posicion de mi ultima receta
  const indexLastRecipe = currentPage * recipesPerPage;
  //La posicion de mi primer receta
  const indexFirstRecipe = indexLastRecipe - recipesPerPage;
  //Me guardo la cuales son las recetas a renderizar dependiendo la pagina en donde estoy
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe);

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

  //ACA VAN A IR MIS HANDLES PARA ORDENAR

  //LOGICA HANDLE
  //function handle(e) {
  //   dispatch(action(target.value))
  // }

  //Creo estados locales solo para que me rendericen en el componente

  const [orderByName, setOrderByName] = useState("");
  const [orderByScore, setOrderByScore] = useState("");
  const [orderByDiets, setOrderByDiets] = useState("");

  //Esta es la funcion que conecta mi accion con cada uno de los valores de mi select
  //en funcion de lo que presiona el usuario
  function handleOrderRecipeByName(e) {
    e.preventDefault();
    dispatch(orderRecipeByName(e.target.value));
    setCurrentPage(1);
    setOrderByName(`Ordenado ${e.target.value}`);
  }

  function handleOrderRecipeByDiet(e) {
    e.preventDefault();
    dispatch(orderRecipeByDiet(e.target.value));
    setCurrentPage(1);
    setOrderByDiets(`Ordenado: ${e.target.value}`);
  }

  function handleOrderRecipeByScore(e) {
    e.preventDefault();
    dispatch(orderRecipeByScore(e.target.value));
    setCurrentPage(1);
    setOrderByScore(`Ordenado ${e.target.value}`);
  }

  return (
    <div className={style.content}>
      <div>
        <h1 className={style.titleHome}>Soy el titulo del HOME</h1>
      </div>

      <div className={style.linkMakeRecipeContainer}>
        {/* ESTO ME LLEVA AL FORMULARIO PARA CREAR MI RECETA */}
        <button className={style.linkMakeRecipe}>
          <Link className={style.LinklinkMakeRecipe} to="/recipe">
            CREA TU PROPIA RECETA
          </Link>
        </button>
      </div>

      <div>
        <SearchBar />
      </div>

      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
      />

      <div className={style.containerSelect}>
        <select onChange={(e) => handleOrderRecipeByName(e)}>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>

        <select onChange={(e) => handleOrderRecipeByScore(e)}>
          <option value="mayor">Mayor - Menor</option>
          <option value="menor">Menor - Mayor</option>
        </select>
        {/*Es importante que en el value le ponga lo que me llega por back porque va a ser lo que me va a filtrar mi action.payload */}

        <select onChange={(e) => handleOrderRecipeByDiet(e)}>
          <option value="">All</option>
          <option value="dairy free">Dieta: Dairy Free</option>
          <option value="gluten free">Dieta: Gluten Free</option>
          <option value="lacto ovo vegetarian">Dieta: Lacto Ovo Vegetarian</option>
          <option value="vegan">Dieta: Vegan</option>
          <option value="pescatarian">Dieta: Pescatarian</option>
          <option value="paleolithic">Dieta: Paleo / Paleolithic</option>
          <option value="fodmap friendly">Dieta: Fodmap Friendly</option>
          <option value="primal">Dieta: Primal</option>
          <option value="whole 30">Dieta: Whole 30</option>
        </select>
      </div>

      <div className={style.buttonRecargarContainer}>
        {/* POR LAS DUDAS NO CARGUEN LAS RECETAS A LA PRIMERA */}
        <button
          className={style.buttonRecargar}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Volver a cargar todas las recetas
        </button>
      </div>

      {/*El componente RECIPES ya trajo el estado inicial por ende exporto mi componente Recipe, 
          mapeo la info de mi state y la paso por props a Recipe */}
      {currentRecipes.map((elem) => {
        return (
          <Link to={`/recipes/${elem?.id}`}>
            <div className={style.recipes}>
              <Card
                key={elem?.id}
                name={elem?.name}
                diets={elem?.diets}
                score={elem?.score}
                description={elem?.description}
                healthy={elem?.healthy}
                steps={elem?.steps}
                image={elem?.image}
              />
            </div>
          </Link>
        );
      })}

      <Footer />
    </div>
  );
}

export default Home;
