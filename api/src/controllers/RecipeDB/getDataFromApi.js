const { Recipe } = require("../../db");
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

const { dbApi } = require('../../utils/config')

const getDataFromApi = async () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`;
  try {
    let info = await axios.get(url)
    let data = info.data.results

    data = data?.map(receta => {
       Recipe.create({
        id: receta?.id || receta?.uuidv4(),
        name: receta?.title,
        description: receta?.summary,
        dishes: receta?.dishTypes,
        score: receta?.spoonacularScore,
        healthy: receta?.healthScore,
        steps: receta?.analyzedInstructions?.map(s => s.steps),
        diets: receta?.diets,
        image: receta?.image,
      })
    })

    console.log("Recetas precargadas en la base de datos")

  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getDataFromApi
}
