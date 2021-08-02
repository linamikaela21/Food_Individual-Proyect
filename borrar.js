const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const { axios } = require('axios').default

//const getRecipes = require('../controllers/recipes')
const { Recipe, Diet } = require('./api/src/db');
const { v4: uuidv4 } = require('uuid');

//const { dbApi } = require('../utils/config')
const { API_KEY } = process.env;
const dbApi = 'f162743368684064b3c0d9bd4a87136d'

router.get('/', (req, res, next) => {
    //if tengo query param, hago una cosa, sino busco todos. PISTA: req.query
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
    var apiRecipePromise = axios.get(url)
    var dbRecipePromise =  Recipe.findAll()

    return Promise.all([
        apiRecipePromise,
        dbRecipePromise
    ]).then(resultados => {
        var apiRecipes = resultados[0].data.results
        var dbRecipe = resultados[1]

        //aca los normalizo
        for (let i = 0; i < dbRecipes.length; i++) 
        apiRecipes = apiRecipes.map((recipe) => {
            return {
                id: dbRecipe[i].id,
                title: dbRecipe[i].title,
                description: dbRecipe[i].summary,
                score: dbRecipe[i].spoonacularScore,
                healthy: dbRecipe[i].healthScore,
                steps: dbRecipe[i].analyzedInstructions,
                diets: dietsMap,
                image: dbRecipe[i].image
            }
        })
        dbRecipes = dbRecipes.map((Recipe) => {
            return {
                id: Recipe.id,
                name: Recipe.name,
                description: Recipe.description,
                score: Recipe.score,
                healthy: Recipe.healthy,
                image: Recipe.image
            }
        })
        //aca los uno
        var allRecipes = apiRecipes.concat(dbRecipes)
        res.send(allRecipes)
    })
    .catch(error => next(error))
})


module.exports = {
    getRecipes,
}

















module.exports = function getRecipes(req, res, next) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
    var apiRecipePromise = axios.get(url)
    var dbRecipePromise = Recipe.findAll()
    res.send('Probando en la otra funcion')

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
                name: receta.name,
                image: receta.image
            }
        })
        dbRecipes = dbRecipes.map((receta) => {
            return {
                id: receta.id,
                name: receta.name,
                image: receta.image
            }
        })
        //aca los uno
        var allRecipes = apiRecipes.concat(dbRecipes)
        res.send(allRecipes)
    })
    .catch(error => next(error))
    }