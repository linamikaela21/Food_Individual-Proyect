const { Router } = require('express');

//Asi lo hacia con la API
// const { 
    // getRecipes, 
    // getRecipeByName, 
    // getRecipeById, 
    // postRecipe, 
    // deleteRecipe, 
// } = require('../controllers/index')

//Ahora tengo mis recetas en mi Base de datos
const { 
    getRecipesDB, 
    getRecipeByNameDB, 
    getRecipeByIdDB, 
    postRecipeDB, 
    deleteRecipeDB, 
    changeRecipeDB 
} = require('../controllers/index')

const router = Router()

//http://localhost:3001/recipes/
// router.get('/', getRecipes);
router.get('/', getRecipesDB);

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

// http://localhost:3001/recipes/search?name=name
// router.get('/search', getRecipeByName);
router.get('/search', getRecipeByNameDB);
//____________________________________________________________________________________

//  GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

// http://localhost:3001/recipes/:id
// router.get('/:id', getRecipeById);
router.get('/:id', getRecipeByIdDB)

//____________________________________________________________________________________

//  POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
// http://localhost:3001/recipes/
// router.post('/', postRecipe);
router.post('/', postRecipeDB);


// DELETE /recipe
// http://localhost:3001/recipes/:id
// router.delete('/:id', deleteRecipe);
router.delete('/:id', deleteRecipeDB);

// PUT /recipe
// http://localhost:3001/recipes/:id
router.put('/:id', changeRecipeDB);

module.exports = router;

