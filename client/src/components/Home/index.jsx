import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import "./index.css";
=======
import style from './index.module.css'
>>>>>>> 2faedd5

import {
  getRecipes,
  orderRecipeByName,
<<<<<<< HEAD
  orderRecipeByDiet,
  orderRecipeByScore,
=======
  // orderRecipeByDiet,
  // orderRecipeByScore,
>>>>>>> 2faedd5
} from "../../actions/index";

import Card from "./Card";
import Paginado from "../Paginado";
import SearchBar from "../SearchBar";
<<<<<<< HEAD
=======
import Footer from "../Footer";
>>>>>>> 2faedd5

export function Home() {
  //Para despachar mis acciones
  const dispatch = useDispatch();

  //Este Hooks es lo mismo que hacer el MapStateToPRops
  //Me estoy trayendo todo lo que esta en el estado de recipes
  const allRecipes = useSelector((state) => state.recipes);

<<<<<<< HEAD
    //Mati WAY
 // const [filteredRecipes, setFilteredRecipes] = useState(0)


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
=======
  //Esta es mi logica del paginado
  //El estado de mi pagina actual que empieza en Pagina 1
  const [currentPage, setCurrentPage] = useState(1)
  //Cuantas recetas quiero por pagina => 9
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    //La posicion de mi ultima receta
    const indexLastRecipe = currentPage * recipesPerPage
     //La posicion de mi primer receta
    const indexFirstRecipe = indexLastRecipe - recipesPerPage
    //Me guardo la cuales son las recetas a renderizar dependiendo la pagina en donde estoy
    const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

>>>>>>> 2faedd5

  //Traigo del estado las recetas cuando el componente se monta
  //Este Hooks es lo mismo que hacer el MapDispatchToPRops
  //Nunca me tengo que olvidar el [] como el segundo parametro del useEffect para no generar un loop infinito
  //Dentro de [] puedo poner un state diciendo que necesito que este este state para que se ejecute el UseEffect sino no se ejecuta
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

<<<<<<< HEAD

=======
>>>>>>> 2faedd5
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


  // const [orderByName, setOrderByName] = useState('')
  // const [orderByScore, setOrderByScore] = useState('')
  // const [orderByDiets, setOrderByDiets] = useState('')

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
    // setFilteredRecipes(`Ordenado: ${e.target.value}`);
  }

  function handleOrderRecipeByScore(e) {
    e.preventDefault();
    dispatch(orderRecipeByScore(e.target.value));
    setCurrentPage(1);
    setOrderByScore(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="content">
      <div>
        <h1 className="title-home">LALI RECIPES</h1>
      </div>
      <div>

      <div className="link-make-recipe">
        {/* ESTO ME LLEVA AL FORMULARIO PARA CREAR MI RECETA */}
        <Link to="/recipe">CREA TU PROPIA RECETA</Link>
=======
    // setOrderByName(`Ordenado ${e.target.value}`);
  }

  // function handleOrderRecipeByScore(e) {
  //   e.preventDefault();
  //   dispatch(orderRecipeByScore(e.target.value));
  //   setCurrentPage(1);
  //   // setOrderByScore(`Ordenado ${e.target.value}`);
  // }

  // function handleOrderRecipeByDiet(e) {
  //   e.preventDefault();
  //   dispatch(orderRecipeByDiet(e.target.value));
  //   // setOrderByDiets(`Ordenado: ${e.target.value}`);
  // }

  return (
    <div className={style.content}>
   
      <div>
        <h1 className={style.titleHome}>Soy el titulo del HOME</h1>
      </div>

      <div className={style.linkMakeRecipeContainer}>
        {/* ESTO ME LLEVA AL FORMULARIO PARA CREAR MI RECETA */}
        <button className={style.linkMakeRecipe}><Link className={style.LinklinkMakeRecipe}to="/recipe">CREA TU PROPIA RECETA</Link></button>
>>>>>>> 2faedd5
      </div>

        <div>
        <SearchBar />
        </div>

        <div>
<<<<<<< HEAD
        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
        />
      </div>
=======
          <Paginado
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
          />
        </div>


>>>>>>> 2faedd5

        <div>
          <select onChange={(e) => handleOrderRecipeByName(e)}>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
<<<<<<< HEAD
          <select onChange={(e) => handleOrderRecipeByScore(e)}>
=======
          <select >
>>>>>>> 2faedd5
            <option value="mayor">Mayor - Menor</option>
            <option value="menor">Menor - Mayor</option>
          </select>
          {/*Es importante que en el value le ponga lo que me llega por back porque va a ser lo que me va a filtrar mi action.payload */}
<<<<<<< HEAD
          <select onChange={(e) => handleOrderRecipeByDiet(e)}>
=======
          <select >
>>>>>>> 2faedd5
            <option value="">All</option>
            <option value="Gluten free">Dieta: Gluten Free</option>
            <option value="Dairy Free">Dieta: Dairy Free</option>
            <option value="Lacto Vegetarian">Dieta: LactoVegetarian</option>
            <option value="Ovo Vegetarian"> Dieta: OvoVegetarian</option>
            <option value="Vegetarian">Dieta: Vegetarian</option>
            <option value="Vegan">Dieta: Vegan</option>
            <option value="Pescetarian">Dieta: Pescetarian</option>
            <option value="Paleo">Dieta: Paleo</option>
            <option value="Ketogenic">Dieta: Ketogenic</option>
            <option value="Primal">Dieta: Primal</option>
            <option value="Whole30">Dieta: Whole30</option>
          </select>
        </div>
<<<<<<< HEAD
      </div>

      <div>
        {/* POR LAS DUDAS NO CARGUEN LAS RECETAS A LA PRIMERA */}
        <button
=======


        <div>
        {/* POR LAS DUDAS NO CARGUEN LAS RECETAS A LA PRIMERA */}
        <button
        className={style.bottonRecargar}
>>>>>>> 2faedd5
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Volver a cargar todas las recetas
        </button>
      </div>

<<<<<<< HEAD
      {/*El componente RECIPES ya trajo el estado inicial por ende exporto mi componente Recipe, 
=======

        {/*El componente RECIPES ya trajo el estado inicial por ende exporto mi componente Recipe, 
          mapeo la info de mi state y la paso por props a Recipe */}

         {/*El componente RECIPES ya trajo el estado inicial por ende exporto mi componente Recipe, 
>>>>>>> 2faedd5
          mapeo la info de mi state y la paso por props a Recipe */}
      {currentRecipes?.map((elem) => {
        return (
          <Link to={`/recipes/${elem?.id}`}>
<<<<<<< HEAD
            <div className="recipes">
=======
            <div className={style.recipes}>
>>>>>>> 2faedd5
              <Card
                key={elem?.id}
                name={elem?.name}
                diet={elem?.diets}
                score={elem?.score}
                description={elem?.description}
                healthy={elem?.healthy}
                steps={elem?.steps}
                image={elem?.image}
              />
            </div>
          </Link>
<<<<<<< HEAD
        );
      })}

    </div>
=======

        );
      })}
        
        < Footer />
      </div>
>>>>>>> 2faedd5
  );
}

export default Home;
