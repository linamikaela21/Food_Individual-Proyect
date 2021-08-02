const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

const { dbApi } = require('../utils/config')

const A = 'f162743368684064b3c0d9bd4a87136d'

const recipes = [{
    "id": 888888888888,
    "title": "Lali",
    "readyInMinutes": 15,
    "servings": 8,
    "sourceUrl": "",
    "image": "jpg",
}]

//ASYNC AWAIT
// getRecipes = async (req, res, next) => {

//     try {
//         var apiRecepesAsync = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${title}`)
//         var dbRecepesAsync = await Recipe.findAll({
//             include: Diet
//         })
//         if (dbRecepesAsync.length === 0) return res.send(apiRecepesAsync.data.results)

//         let arrayResponse = []

//         const concatRecipes = arrayResponse.concat(getRecepes.data.results)

//         return res.send(concatRecipes)
//     } catch (error) {
//         next(error)
//     }

// }


// http://localhost:3001/recipes/name
getRecipe = ('/', (req, res) => {
    return Recipe.findAll({
        include: Diet
    })
 }).then((recipes) => {
     return res.json(recipes)
 })


//PROMESAS
//  router.get('/name', (req, res) => {
//     const { title } = req.query
//     var apiRecepesPromese = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${title}&number=10`)

//     var dbRecepesPromese = Recipe.findAll({
//       include: Diet
//     })

//     return Promise.all([
//       apiRecepesPromese,
//       dbRecepesPromese
//     ]).then(res => {
//       var apiRecepes = res[0].data.results
//       var dbRecepes = res[1]
//       var allRecepes = apiRecepes.concat(dbRecepes)
//       res.send([...allRecepes, ...recipes])

// }).catch(error => res.status(500).json({error: 'No se han encontrado las recetas'}))
// })


// http://localhost:3001/recipes/1
// router.get('/:id', async (req, res) => {
//     const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${A}&addRecipeInformation=true&params=${req.params.id}`)
//     res.json(res.data)
// })
