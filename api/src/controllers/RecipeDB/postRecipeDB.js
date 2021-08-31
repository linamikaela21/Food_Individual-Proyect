const { Recipe, Diet } = require('../../db');

const { Op, where } = require("sequelize");

const { v4: uuidv4 } = require('uuid')

// http://localhost:3001/recipes/

 postRecipeDB = async(req, res) => {
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
    id: uuidv4(),
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
  postRecipeDB
}