const { Op } = require("sequelize");
const axios = require('axios').default

const { Recipe, Diet } = require('../../db');

const { dbApi } = require('../../utils/config')

//=====>>> http://localhost:3001/recipes/serch <=======

// router.use('/search', getRecipeByName)

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

// function getRecipeByName (req, res, next) {
//     res.send('Soy la funcion getRecipeByName')
// }

// http://localhost:3001/recipes/search?name=cake

//ASYNC AWAIT
//if tengo query param, hago una cosa, sino busco todos. PISTA: req.query
function getRecipeByName(req, res, next) {

    const { name } = req.query

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${name}&number=100`
    var apiRecipePromise = axios.get(url)
    var dbRecipePromise = Recipe.findAll({
        where: {
            name: {
                [Op.iLike]: `%{name}%`
            }
        },
        include: Diet
    })

    return Promise.all([
        apiRecipePromise,
        dbRecipePromise
    ]).then(resultados => {
        var apiRecipes = resultados[0].data.results
        var dbRecipes = resultados[1]

        if(apiRecipes.length === 0 || dbRecipes === 0) return res.send(`La palabra ingresada no corresponde con ninguna receta / Your request doesn't with any recipe`)
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
                diets: receta.diets,
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

//PROMESAS
// function getRecipeByName (req, res, next) {

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

module.exports = {
    getRecipeByName
}