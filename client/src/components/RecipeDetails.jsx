import React from "react"

export function RecipeDetails({name, diet,  score, description, healthy, steps, image}) {
    return (
      <div>
          <h2 className="nameDetails"> {name} </h2>
          <h3 className="dietDetails"> {diet} </h3>
          <h4 className="healthyDetails"> {score} </h4>
          <h4 className="scoreDetails"> {healthy} </h4>
          <h5 className="descriptionDetails"> {description} </h5>
          <h5 className="stepsDetails"> {steps} </h5>
          <img className="imgDetails" src={image} alt="Not found" width="200" height="250"></img>
      </div>
    )
  };
  
  export default RecipeDetails;