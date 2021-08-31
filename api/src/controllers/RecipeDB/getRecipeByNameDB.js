const { Op } = require("sequelize");

const { Recipe, Diet } = require("../../db");

//=====>>> http://localhost:3001/recipes/serch <=======

// router.use('/search', getRecipeByName)

// function getRecipeByName (req, res, next) {
//     res.send('Soy la funcion getRecipeByName')
// }

// http://localhost:3001/recipes/search?name=cake

const exclude = ["createdAt", "updatedAt"];

const getRecipeByNameDB = async (req, res, next) => {

  try {
    const { name } = req.query;

    const dbRecipes = await Recipe.findAll({
      attributes: {
        exclude,
      },
      where: {
      name: {
          [Op.iLike]: `%${name}%`,
        }
          },
      include: {
        model: Diet,
      },
    });

    console.log(name);

    if (dbRecipes.length === 0) {
      return res.send(
        `La palabra ingresada no corresponde con ninguna receta | Your request doesn't with any recipe`
      );
    } else {
      res.send(dbRecipes);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecipeByNameDB,
};
