import { useState, useEffect } from "react";
import axios from "axios";
import { URL_ALL_RECIPES, URL_DIETS } from "../../constantes";
import './index.css'

export  function MakeRecipe() {
  //const {name, image, episodes} = req.body

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    score: "",
    healthy: "",
    steps: "",
    image: "",
    diets: [],
  });

  const [diets, setDiets] = useState([]);

  function getDiets() {
    axios(URL_DIETS).then((response) => {
      setDiets(response.data);
    });
  }

  useEffect(() => {
    getDiets();
  }, []);

  //Creo mi funcion onChange para el formulario para tener un estado general para todos mis inputs
  function onInputChange(e) {
    setRecipe((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  console.log(recipe)

  function addDietsToRecipe(id) {
    setRecipe({
      ...recipe,
      diets: [...recipe.diets, id],
    });
  }

  //Aca hago mi post a mi base de datos
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(URL_ALL_RECIPES, recipe);
    alert("Se ha creado una nueva receta");
    //e.target.reset(); //ESTO ES PARA QUE SE SETE EN BLANCO UNA VEZ ENVIADO
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label >Name</label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          placeholder="Recipe Name"
          onChange={onInputChange}
        />
      </p>
      <p>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={recipe.description}
          placeholder="Recipe Description"
          onChange={onInputChange}
        />
      </p>
      <p>
        <label>Score</label>
        <input
           type="number"
          name="score"
          value={recipe.score}
          placeholder="Recipe Score"
          onChange={onInputChange}
        />
      </p>
      <p>
        <label>Healthy</label>
        <input
          type="number"
          name="healthy"
          value={recipe.healthy}
          placeholder="Recipe Healthy"
          onChange={onInputChange}
        />
      </p>
      <p>
        <label>Steps</label>
        <textarea
          type="textarea"
          name="steps"
          value={recipe.steps}
          placeholder="Recipe Steps"
          onChange={onInputChange}
        />
      </p>
      <p>
        <label>Image</label>
        <input
          type="text"
          name="image"
          value={recipe.image}
          placeholder="Recipe Image"
          onChange={onInputChange}
        />
      </p>
      <div>
      {diets.map(diet => {
                return <div>
                    {diet.name}
                    <button 
                        onClick={() => addDietsToRecipe(diet.id)}>
                            Agregar dieta
                    </button>
                </div>
            })}
      </div>
      <input type="submit" />
    </form>
  );
}

export default MakeRecipe;