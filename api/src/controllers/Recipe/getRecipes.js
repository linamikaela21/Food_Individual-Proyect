const { Op } = require("sequelize");
const { axios } = require('axios').default

const { Recipe, Diet } = require('../../db');
//const { v4: uuidv4 } = require('uuid');

//const { dbApi } = require('../utils/config')
//const { API_KEY } = process.env;
const dbApi = 'f162743368684064b3c0d9bd4a87136d'

//=====>>> http://localhost:3001/recipes/ <=======

// http://localhost:3001/recipes/
// function getRecipes (req, res, next) {
//   res.send('Soy la funcion getRecipes')
// }


//INTENTOS DE QUE ME CONECTE LA API (La KEY esta Harcodiada porque de ninguna forma me conectada si no es asi)

//Promesas
// function getRecipes(req, res, next) {
//   const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
//   axios.get(url)
//     .then((response) => res.json(response.data.results)).catch(error => next(error))
// }

//ASYNC AWAIT
async function getRecipes (_req, res, next) {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
  const respuesta = await axios.get(url)
  res.json(respuesta.data.results).catch(error => next(error))
}

//Mi funcion
// getRecipes = async (_req, res, next) => { 
//   try {
//     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
//     var apiRecipes = await axios.get(url)
//     var dbRecipes = await Recipe.findAll(
//       { include: Diet }
//     )

//     if (dbRecipes.length === 0) return res.send(apiRecipes.data.results)

//     let arrayresponse = []

//     for (let i = 0; i < dbRecipes.length; i++) {
//       let dietsMap = []
//       dbRecipes[i].diets.map(diet => (
//         dietsMap.push(diet.name)
//       ))

//       let objRtaBD = {
//         id: dbRecipe[i].id,
//         name: dbRecipe[i].title,
//         description: dbRecipe[i].summary,
//         score: dbRecipe[i].spoonacularScore,
//         healthy: dbRecipe[i].healthScore,
//         steps: dbRecipe[i].analyzedInstructions,
//         diets: dietsMap,
//         image: dbRecipe[i].image
//       }
//       arrayresponse.push(objRtaBD)
//     }
//     const result = arrayresponse.concat(apiRecipes.data.results)
    
//     return res.send(result)

//   } catch (error) {
//     next(error)
//   }
// }

//EJEMPLO DE MATI
//if tengo query param, hago una cosa, sino busco todos. PISTA: req.query
// module.exports = function getRecipes(req, res, next) {
//     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
//     var apiRecipePromise = axios.get(url)
//     var dbRecipePromise = Recipe.findAll()

//     return Promise.all([
//         apiRecipePromise,
//         dbRecipePromise
//     ]).then(resultados => {
//         var apiRecipes = resultados[0].data.results
//         var dbRecipes = resultados[1]
    
//         //aca los normalizo
//         apiRecipes = apiRecipes.map((receta) => {
//             return {
//                 id: receta.id,
//                 name: receta.name,
//                 image: receta.image
//             }
//         })
//         dbRecipes = dbRecipes.map((receta) => {
//             return {
//                 id: receta.id,
//                 name: receta.name,
//                 image: receta.image
//             }
//         })
//         //aca los uno
//         var allRecipes = apiRecipes.concat(dbRecipes)
//         res.send(allRecipes)
//     })
//     .catch(error => next(error))
//     }

module.exports = {
  getRecipes
}