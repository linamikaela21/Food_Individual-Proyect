import { useState, useEffect } from "react";
import axios from "axios";
import { URL_ALL_RECIPES, URL_DIETS } from "../../constantes";


export default function CreateRecipe() {
  //const {name, image, episodes} = req.body

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    score: "",
    healthy: "",
    steps: [],
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

  function onInputChange(e) {
    setRecipe((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function addDietsToRecipe(id) {
    setRecipe({
      ...recipe,
      diets: [...recipe.diets, id],
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(URL_ALL_RECIPES, recipe);
    alert("Se ha creado una nueva receta");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="">name</label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={onInputChange}
        />
      </p>
      <p>
        <label htmlFor="">image</label>
        <input
          type="text"
          name="image"
          value={recipe.image}
          onChange={onInputChange}
        />
      </p>
      <div>
      {diets.map(diet => {
                return <div>
                    {diet.name}
                    <buttton 
                        onClick={() => addDietsToRecipe(diet.id)}>
                            Agregar dieta
                    </buttton>
                </div>
            })}
      </div>
      <input type="submit" />
    </form>
  );
}
