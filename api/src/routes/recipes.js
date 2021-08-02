const { Router } = require('express');
const { axios } = require('axios');

//const getRecipes = require('../controllers/recipes')
const { Recipe, Diet } = require('../db');

//const { dbApi } = require('../utils/config')
const dbApi = 'f162743368684064b3c0d9bd4a87136d'

const router = Router()

//=====>>> http://localhost:3001/recipes/ <=======


// router.use('/', getRecipes)

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

// http://localhost:3001/recipes?name=hola
router.get('/', (req, res) => {
    const { name } = req.query
    var apiRecepesPromise = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${name}&number=10`)
    var dbRecepesPromise = Recipe.findAll({
        include: Diet
    })
    return Promise.all([
        apiRecepesPromise,
        dbRecepesPromise
    ])
        .then(resultado => {
            var apiRecepes = resultados[0].data.results
        var dbRecepes = resultados[1]
        var allRecipes = apiRecepes.concat(dbRecepes)
        res.send(allRecipes)
        })
        .catch(error => res.status(500).json({error: 'No se han encontrado las recetas'}))
})

//------------------------------------------------------------------------------
//  GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

//Funcion para agregar una Dieta a una Receta ===> addTABLE 
router.get('/:id', async (req, res) => {
    const { recipeId, dietId } = req.params
    var receta = await Recipe.findByPk(recipeId)
    var dieta = await Diet.findByPk(dietId)
    var resultado = receta.addDiet(dieta)
    return res.json(resultado)
})

//____________________________________________________________________________________

//  POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos


//PROMESAS
// router.post('/', (req, res) => {
//     const { name, image } = req.body
//     Recipe.create({
//         name,
//         image
//     })
//     .then(createdRecipe => {
//     res.json(createdRecipe)
// }) 
//     .catch(error => res.sendStatus(404))
// })

//ASYNC AWAIT 
// router.post('/', async (req, res) => {
//     const { name, image } = req.body
//     try {
//         const createdRecipe = await Recipe.create({
//             name,
//             image
//         })
//         res.json(createdRecipe)
//     } catch (error) {
//         console.log(error)
//     }
// })





module.exports = router;

