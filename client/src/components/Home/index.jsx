import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import style from "./index.module.css";

import {
  getRecipes,
  orderRecipeByName,
  orderRecipeByDiet,
  orderRecipeByScore,
} from "../../redux/actions/index";

import Card from "./Card";
import Paginado from "../Paginado";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import Nav from "../Nav";

export function Home() {
  //Para despachar mis acciones
  const dispatch = useDispatch();

  //Este Hooks es lo mismo que hacer el MapStateToPRops
  //Me estoy trayendo todo lo que esta en el estado de recipes
  const allRecipes = useSelector(state => state.recipes);

  //Esta es mi logica del paginado
  //El estado de mi pagina actual que empieza en Pagina 1
  const [currentPage, setCurrentPage] = useState(1);
  //Cuantas recetas quiero por pagina => 9
  const recipesPerPage= 9
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
    //getDiet y map al select y useSelector
  }, [dispatch]);

  //Para resetear las recetas en caso de que no se hallan cargado bien
  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(getRecipes());
  // }

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
        <Nav />
      </div>

      <div>
        <SearchBar />
      </div>

      <div className={style.containerSelect}>
        <label>Name | Nombre</label>
        <select onChange={(e) => handleOrderRecipeByName(e)}>
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>

        <label>Score | Puntaje</label>
        <select onChange={(e) => handleOrderRecipeByScore(e)}>
          <option value="mayor">Ascending | Ascendente</option>
          <option value="menor">Descending | Descendente</option>
        </select>
        {/*Es importante que en el value le ponga lo que me llega por back porque va a ser lo que me va a filtrar mi action.payload */}

        <label>Diets | Dietas</label>
        <select onChange={(e) => handleOrderRecipeByDiet(e)}>
          <option value="all">All | Todas</option>
          <option value="gluten free">Dieta: Gluten Free</option>
          <option value="dairy free">Dieta: Dairy Free</option>
          <option value="lacto ovo vegetarian">Dieta: Lacto Ovo Vegetarian</option>
          <option value="vegan">Dieta: Vegan</option>
          <option value="paleolithic">Dieta: Paleo / Paleolithic</option>
          <option value="pescatarian">Dieta: Pescatarian</option>
          <option value="primal">Dieta: Primal</option>
          <option value="fodmap friendly">Dieta: Fodmap Friendly</option>
          <option value="whole 30">Dieta: Whole 30</option>
        </select>
      </div>

      {/*El componente RECIPES ya trajo el estado inicial por ende exporto mi componente Recipe, 
          mapeo la info de mi state y la paso por props a Recipe */}
      {currentRecipes.map((elem) => {
        return (
          <Link to={`/recipes/${elem?.id}`}>
            <div className={style.recipes} name={elem.id}>
              <Card
                key={elem?.id}
                name={elem?.name}
                diets={elem?.Diets}
                dishes={elem?.dishes}
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

      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
      />

      <Footer />
    </div>
  );
}

export default Home;
