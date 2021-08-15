const { Recipe, Diet } = require('../../db');

const { Op, where } = require("sequelize");

const { v4: uuidv4 } = require('uuid')

//  POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
// http://localhost:3001/recipes

// function postRecipe(req, res, next) {
//     res.send('Soy la funcion postRecipe')
// }

// http://localhost:3001/recipes/

async function postRecipe(req, res) {
  const {
    name,
    description,
    dishes,
    score,
    healthy,
    steps,
    image,
    diets
  } = req.body


  if (!name || !description) return res.status(404).json({})

  const newRecipe = await Recipe.create({
    name: name,
    description: description,
    dishes: dishes,
    score: score,
    healthy: healthy,
    image: image,
    steps: steps
  })

  //Agrego dietas
  for (let i = 0; i < diets.length; i++) {
    await newRecipe.addDiet(diets[i], { through: 'recipe_diet' })
  }

  const recipes_diets = await Recipe.findAll({
    where: {
      name: name
    },
    include: Diet
  })

  return res.json(recipes_diets)
}


module.exports = {
  postRecipe
}