import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './index.module.css'

import { getRecipeById } from "../../actions";

export function RecipeDetails () {

 const dispatch = useDispatch()

 const { id } = useParams();
 //Si le paso props a RecipeDetails puedo hacerlo asi
// const {id} = props.match.params;

  useEffect(() => {
    dispatch(getRecipeById(id))
    setLoading(true)
  }, [id, dispatch])

  //Me traigo el estado desde el reducer
 const recipeDetails = useSelector(state => state.details)

const [loading, setLoading] = useState(false);

 const funcDescription = () => {
  return  {__html: recipeDetails.description};
 }

  return (
    <div className="recipeDetails">
      { loading ?
        <div className="contentRecipeDetails">
            <h1 className="nameDetails"> {recipeDetails.name} </h1>
            <img

            className="imgDetails"
            src={recipeDetails.image}
            alt="Not found"
            width="400"
            height="400"
          />
            <h3>Diets:</h3>
          <h3 className="dietDetails"> {recipeDetails.diets} </h3>
          <h3> Score:</h3>
          <h3 className="healthyDetails">{recipeDetails.score} </h3>
          <h3> Healthy:</h3>
          <h3 className="scoreDetails"> {recipeDetails.healthy} </h3>
          <h3>Description: </h3>
          <h4 className="descriptionDetails" dangerouslySetInnerHTML={funcDescription()}></h4>
          <h4>Instructions: </h4>
          <h5 className="stepsDetails"> {recipeDetails.steps} </h5>
          </div>
          : 
          <p>Loading...</p>
      }
      <Link to='/recipes'><button>Volver / Go back</button></Link>
    </div>
  )

}

export default RecipeDetails;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import './index.css'

// import { URL_ALL_RECIPES } from "../../constantes";

// export function RecipeDetails () {

//   const [recipe, setRecipe] = useState({});

//   const { id } = useParams();

//   function getRecipesById(id) {
//     axios(URL_ALL_RECIPES + id).then((recipe) => {
//       setRecipe(recipe.data);
//     });
//   }

//   useEffect(() => {
//     getRecipesById(id);
//   }, [])

//   return (
//     <div>
//       {
//         <div className="content">
//             <h2 className="nameDetails"> {recipe.name} </h2>
//           <h3 className="dietDetails"> {recipe.diets} </h3>
//           <h4 className="healthyDetails"> Score : {recipe.score} </h4>
//           <h4 className="scoreDetails"> Healthy: {recipe.healthy} </h4>
//           <h5 className="descriptionDetails"> {recipe.description} </h5>
//           <h5 className="stepsDetails"> Steps: {recipe.steps} </h5>
//           <img
//             className="imgDetails"
//             src={recipe.image}
//             alt="Not found"
//             width="400"
//             height="400"
//           ></img>
//           </div>
//       }
// <Link to='/recipes'><button>Volver / Go back</button></Link> 
//     </div>
//   )

// }

// export default RecipeDetails;