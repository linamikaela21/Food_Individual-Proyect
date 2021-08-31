const { Recipe, Diet } = require("../../db");

//=====>>> http://localhost:3001/recipes/ <=======

// http://localhost:3001/recipes/
// function getRecipes (req, res, next) {
//   res.send('Soy la funcion getRecipes')
// }

const exclude = ['createdAt', 'updatedAt']

const getRecipesDB = async (_req, res, next) => {
  try {
    const dbRecipes = await Recipe.findAll({
      attributes: {
        exclude
    },
    include: {
      model: Diet
  }
})

    res.send(dbRecipes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecipesDB,
}
