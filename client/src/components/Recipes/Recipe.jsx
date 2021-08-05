import React from 'react'

const Card = ({name, diet, image}) => {
    return (
        <div>
            <h2 className="nameDetails"> {name} </h2>
           <h3 className="dietDetails"> {diet} </h3> 
          <img className="imgDetails" src={image} alt="Not found" width="200" height="250"></img>
        </div>
    )
}

export default Card
