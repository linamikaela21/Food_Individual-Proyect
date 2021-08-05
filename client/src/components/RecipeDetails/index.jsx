import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { URL_ALL_RECIPES } from "../../constantes";

export function RecipeDetails () {

  const [recipe, setRecipe] = useState({});

  const { id } = useParams();

  function getRecipesById(id) {
    axios(URL_ALL_RECIPES + id).then((recipe) => {
      setRecipe(recipe.data);
    });
  }

  useEffect(() => {
    getRecipesById(id);
  }, [])

  return (
    <div>
      {
        <div>
          <div>
            <h2 className="nameDetails"> {recipe.name} </h2>
          </div>
          <h3 className="dietDetails"> {recipe.diets} </h3>
          <h4 className="healthyDetails"> {recipe.score} </h4>
          <h4 className="scoreDetails"> {recipe.healthy} </h4>
          <h5 className="descriptionDetails"> {recipe.description} </h5>
          <h5 className="stepsDetails"> {recipe.steps} </h5>
          <img
            className="imgDetails"
            src={recipe.image}
            alt="Not found"
            width="200"
            height="250"
          ></img>
        </div>
      }
    </div>
  )

}

export default RecipeDetails;