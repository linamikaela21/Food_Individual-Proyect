const { Op } = require("sequelize");
const { axios } = require('axios').default

//const { Recipe, Diet } = require('../../db');
//const { v4: uuidv4 } = require('uuid');

//const { dbApi } = require('../utils/config')
//const { API_KEY } = process.env;
const dbApi = 'f162743368684064b3c0d9bd4a87136d'

//=====>>> http://localhost:3001/recipes/ <=======

// router.use('/search', getRecipeByName)

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

function getRecipeByName (req, res, next) {
    res.send('Soy la funcion getRecipeByName')
}

// function getRecipes (req, res, next) {
  
//     const { name } = req.query
  
//     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${name}&number=100`
//     var apiRecipesPromise = axios.get(url)
//     var dbRecipesPromise =  Recipe.findAll()
  
//     return Promise.all([
//         apiRecipesPromise,
//         dbRecipesPromise
//     ]).then(resultados => {
//         var apiRecipes = resultados[0].data.results
//         var dbRecipes = resultados[1]
  
//         //aca los normalizo
//         apiRecipes = apiRecipes.map((recipe) => {
//             return {
//                 id: recipe.id,
//                 name: recipe.name,
//                 image: recipe.image
//             }
//         })
//         dbRecipes = dbRecipes.map((recipe) => {
//             return {
//                 id: recipe.id,
//                 name: recipe.name,
//                 image: recipe.image
//             }
//         })
//         //aca los uno
//         var allRecipes = apiRecipes.concat(dbRecipes)
//         res.send(allRecipes)
//     })
//     .catch(error => next(error))
//   }
  
//INTENTO DOS ASYNC AWAIT
// router.get('/search', async (req, res) => {
//     const { name } = req.query
//     try {
//         var apiRecepesPromise = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${name}`)
//         var dbRecepesPromise = await Recipe.findAll({
//            where:  {name: {
//              [Op.iLike]: `%{name}%`
//            }},
//         include: Diet
//         })
//         return Promise.all([
//             apiRecepesPromise,
//             dbRecepesPromise
//         ])
//             .then(resultado => {
//                 var apiRecepes = resultado[0].data.results
//             var dbRecepes = resultado[1]
//             var allRecipes = apiRecepes.concat(dbRecepes)
//             res.send(allRecipes)
//             })
        
//     } catch (error) {
//         res.status(500).json({error: 'No se han encontrado las recetas'})
//     }
// })
module.exports = {
getRecipeByName
}