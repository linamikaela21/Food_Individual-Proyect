const { Router } = require('express');

const { getRecipes, getRecipeByName, getRecipeById, postRecipe } = require('../controllers/index')

const router = Router()

//____________________________________________________________________________________
http://localhost:3001/recipes/
router.get('/', getRecipes); 

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

// http://localhost:3001/recipes/search?name=name
router.get('/search', getRecipeByName); 

//____________________________________________________________________________________

//  GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

// http://localhost:3001/recipes/:id
router.get('/:id', getRecipeById);

//Funcion para agregar una Dieta a una Receta ===> addTABLE 
// router.get('/:id', async (req, res) => {
//     const { recipeId, dietId } = req.params
//     var receta = await Recipe.findByPk(recipeId)
//     var dieta = await Diet.findByPk(dietId)
//     var resultado = receta.addDiet(dieta)
//     return res.json(resultado)
// })

//____________________________________________________________________________________

//  POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
// http://localhost:3001/recipe/addrecipe
router.post('/addrecipe', postRecipe); 

module.exports = router;

