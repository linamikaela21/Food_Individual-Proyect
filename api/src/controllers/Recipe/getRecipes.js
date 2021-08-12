const axios = require('axios').default

const { Recipe } = require('../../db');

const { dbApi } = require('../../utils/config')

//=====>>> http://localhost:3001/recipes/ <=======

// http://localhost:3001/recipes/
// function getRecipes (req, res, next) {
//   res.send('Soy la funcion getRecipes')
// }

//Promesas
// function getRecipes(req, res, next) {
//   const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
//   axios.get(url)
//     .then((response) => res.json(response.data.results)).catch(error => next(error))
// }

//ASYNC AWAIT
//if tengo query param, hago una cosa, sino busco todos. PISTA: req.query

 const getRecipes = (_req, res, next) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
  var apiRecipePromise = axios.get(url)
  var dbRecipePromise = Recipe.findAll()

  return Promise.all([
    apiRecipePromise,
    dbRecipePromise
  ]).then(resultados => {
    var apiRecipes = resultados[0].data.results
    var dbRecipes = resultados[1]

    //aca los normalizo
    apiRecipes = apiRecipes.map((receta) => {
      return {
        id: receta.id,
        name: receta.title.toUpperCase(),
        description: receta.summary,
        dishes: receta.dishTypes,
        score: receta.spoonacularScore,
        healthy: receta.healthScore,
        steps: receta.analyzedInstructions,
        diets: receta.diets.map(elem => elem.toUpperCase() + ` - `),
        image: receta.image,
      }
    })
    
    dbRecipes = dbRecipes.map((receta) => {
      return {
        id: receta.id,
        name: receta.name,
        description: receta.description,
        dishes: receta.dishes,
        score: receta.score,
        healthy: receta.healthy,
        steps: receta.steps,
        diets: receta.diets,
        image: receta.image,
      }
    })
    //aca los uno
    var allRecipes = apiRecipes.concat(dbRecipes)
    res.send(allRecipes)
  })
    .catch(error => next(error))
}

module.exports = {
  getRecipes
}