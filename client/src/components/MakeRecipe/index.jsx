import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./index.css";

import { addRecipe, getDiets } from "../../actions";

export function MakeRecipe() {
  //const {name, description, score, healthy, image, steps, diets} = req.body

  //Para redireccionarme una vez que envio el formulario
  const history = useHistory();

  const dispatch = useDispatch();

  //Me estoy trayendo el estado de diets
  const diets = useSelector((state) => state.diets);

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    score: "",
    healthy: "",
    steps: "",
    image: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  //Creo mi funcion onChange para el formulario para tener un estado general para todos mis inputs
  function onInputChange(e) {
    setRecipe((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(e.target.value)
  }

  const handleDiets = (e) => {
    setRecipe({
      ...recipe,
      diets: [
        ...recipe.diets, 
        e.target.value]
    });
  }

  //Aca hago mi post a mi base de datos
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipe(recipe));
    alert("Se ha creado una nueva receta");
    setRecipe({
      name: "",
      description: "",
      score: "",
      healthy: "",
      steps: "",
      image: "",
      diets: [],
    });
    history.push("/recipes");
  };

  return (
    <div>
      <Link to="/recipes">
        {" "}
        <button>VOLVER</button>{" "}
      </Link>
      <h1>CREA TU PROPIA RECETA !</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            placeholder="Recipe Name"
            onChange={(e) => onInputChange(e)}
          />
        </p>
        <p>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={recipe.description}
            placeholder="Recipe Description"
            onChange={(e) => onInputChange(e)}
          />
        </p>
        <p>
          <label>Score:</label>
          <input
            type="number"
            name="score"
            value={recipe.score}
            placeholder="Recipe Score"
            onChange={(e) => onInputChange(e)}
          />
        </p>
        <p>
          <label>Healthy Score:</label>
          <input
            type="number"
            name="healthy"
            value={recipe.healthy}
            placeholder="Recipe Healthy"
            onChange={(e) => onInputChange(e)}
          />
        </p>
        <p>
          <label>Describe steps:</label>
          <textarea
            type="textarea"
            name="steps"
            value={recipe.steps}
            placeholder="Recipe Steps"
            onChange={(e) => onInputChange(e)}
          />
        </p>
        <p>
          <label>Load image </label>
          <input
            type="text"
            name="image"
            value={recipe.image}
            placeholder="Recipe Image"
            onChange={(e) => onInputChange(e)}
          />
        </p>

          <select onChange={e => handleDiets(e)}>
            {
            diets.map(diet => (
              <option value={diet.name}>{diet.name}</option>
            ))
            }
            <ul>
              <li> {
              recipe.diets.map(elem => elem + ", ")
              } </li>
            </ul>
          </select>

        <button type="submit">Crear Personaje</button>
      </form>
    </div>
  );
}

export default MakeRecipe;
