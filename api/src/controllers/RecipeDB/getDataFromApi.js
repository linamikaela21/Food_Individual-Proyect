const { Recipe, Diet } = require("../../db");
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

const { dbApi } = require('../../utils/config')

const getDataFromApi = async () => {

  // for (let offset = 0; offset <= 900; offset + 100) y &offset=${offset} en URL

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
    try {
      let info = await axios.get(url)
      let data = info.data.results
      
      for ( let receta of data) {
        const recipe = await Recipe.create({
            id: uuidv4(),
           name: receta?.title,
           description: receta?.summary,
           dishes: receta?.dishTypes,
           score: receta?.spoonacularScore,
           healthy: receta?.healthScore,
           steps: receta?.analyzedInstructions?.map(s => s.steps.map(x => x.step)),
           ingredients: receta?.analyzedInstructions?.map(ing => ing.steps.map(ing => ing.ingredients.map(ing => ing.name))),
           image: receta?.image,
        })
        for (let diet of receta.diets) {
          const [dietDB] = await Diet.findOrCreate({
            where: {
              name: diet
            }
          })
          await recipe.addDiet(dietDB)
        }
      }
      
      console.log("Recetas precargadas en la base de datos")
  
    } catch (error) {
      console.error(error)
    }
  }

module.exports = {
  getDataFromApi
}
