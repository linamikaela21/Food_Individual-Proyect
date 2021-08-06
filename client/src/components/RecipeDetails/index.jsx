import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import './index.css'

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
        <div className="content">
            <h2 className="nameDetails"> {recipe.name} </h2>
          <h3 className="dietDetails"> {recipe.diets} </h3>
          <h4 className="healthyDetails"> Score : {recipe.score} </h4>
          <h4 className="scoreDetails"> Healthy: {recipe.healthy} </h4>
          <h5 className="descriptionDetails"> {recipe.description} </h5>
          <h5 className="stepsDetails"> Steps: {recipe.steps} </h5>
          <img
            className="imgDetails"
            src={recipe.image}
            alt="Not found"
            width="400"
            height="400"
          ></img>
          </div>
      }
    </div>
  )

}

export default RecipeDetails;