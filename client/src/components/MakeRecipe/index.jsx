import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./index.css";

import { addRecipe, getDiets } from "../../actions";

export function MakeRecipe() {
  //const {name, description, score, healthy, image, steps, diets} = req.body

  const dispatch = useDispatch()

  //Me estoy trayendo el estado de diets
  const diets = useSelector(state => state.diets)

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
    dispatch(getDiets())
  }, [dispatch]);

  //Creo mi funcion onChange para el formulario para tener un estado general para todos mis inputs
  // function onInputChange(e) {
  //   setRecipe((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // }

  console.log(recipe);

  function addDietsToRecipe(id) {
    setRecipe({
      ...recipe,
      diets: [...recipe.diets, id],
    });
  }

  //Aca hago mi post a mi base de datos
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(addRecipe(recipe))
    alert("Se ha creado una nueva receta");
  }

  return (
    <div>
    <Link to='/recipes'> <button>VOLVER</button> </Link>
    <h1>CREA TU PROPIA RECETA !</h1>
    <form onSubmit={handleSubmit}>
      <p>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          placeholder="Recipe Name"
        />
      </p>
      <p>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={recipe.description}
          placeholder="Recipe Description"
        />
      </p>
      <p>
        <label>Score:</label>
        <input
          type="number"
          name="score"
          value={recipe.score}
          placeholder="Recipe Score"
        />
      </p>
      <p>
        <label>Healthy Score:</label>
        <input
          type="number"
          name="healthy"
          value={recipe.healthy}
          placeholder="Recipe Healthy"
        />
      </p>
      <p>
        <label>Describe steps:</label>
        <textarea
          type="textarea"
          name="steps"
          value={recipe.steps}
          placeholder="Recipe Steps"
        />
      </p>
      <p>
        <label>Load image </label>
        <input
          type="text"
          name="image"
          value={recipe.image}
          placeholder="Recipe Image"
        />
      </p>
      <div>
        {diets.map((diet) => {
          return (
            <div>
              {diet.name}
              <button onClick={() => addDietsToRecipe(diet.id)}>
                Agregar dieta
              </button>
            </div>
          );
        })}
      </div>
      <button type='submit'>Crear Receta</button>
    </form>
    </div>
  );
}

export default MakeRecipe;
