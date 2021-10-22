const { Recipe, Diet } = require("../../db");

// http://localhost:3001/recipes/1

getRecipeByIdDB = async (req, res, next) => {
  const { id } = req.params;

  try {
    const dbRecipeId = await Recipe.findOne({
      where: {
        id: id,
      },
      include: Diet,
    });

    let objectResponse = {
      id: dbRecipeId.id,
      name: dbRecipeId.name,
      description: dbRecipeId.description,
      dishes: dbRecipeId.dishes,
      score: dbRecipeId.score,
      healthy: dbRecipeId.healthy,
      diets: dbRecipeId.Diets,
      steps: dbRecipeId.steps,
      image: dbRecipeId.image,
    };

    if (!dbRecipeId) return res.status(400).send("Invalid ID");
    return res.send(objectResponse);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getRecipeByIdDB
};
