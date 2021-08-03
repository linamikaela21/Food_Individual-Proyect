const axios = require('axios').default

const { Recipe, Diet} = require('../../db');

const { dbApi } = require('../../utils/config')

// function getRecipeById (req, res, next) {
//     res.send('Soy la funcion getRecipeById')
// }

// http://localhost:3001/recipes/1

getRecipeById = async (req, res, next) => {
    const { id } = req.params
    try {
        if (id.length < 35) {
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${dbApi}&number=100`
            const apiRecipes = await axios.get(url)
            //   let analyzedInstructionsMap = []
            //     apiRecipes.data.analyzedInstructions.map((inst) => (
            //      inst.steps?.map((s) => (
            //        analyzedInstructionsMap.push(s.step)
            //      ))
            //   ))
            //console.log(apiRecipes.data.analyzedInstructions.steps)
            const apiRecipesResult = apiRecipes.data

            let objectResponse = {
                id: apiRecipesResult.id,
                vegetarian: apiRecipesResult.vegetarian,
                vegan: apiRecipesResult.vegan,
                glutenFree: apiRecipesResult.glutenFree,
                name: apiRecipesResult.title,
                image: apiRecipesResult.image,
                diets: apiRecipesResult.diets,
                dishTypes: apiRecipesResult.dishTypes,
                description: apiRecipesResult.summary,
                score: apiRecipesResult.spoonacularScore,
                healthy: apiRecipesResult.healthScore,
                //analyzedInstructions: analyzedInstructionsMap
            }

            if (apiRecipesResult) return res.send(objectResponse)

        } else {
            const dbRecipeId = await Recipe.findOne({
                where: {
                    id: req.params.id
                },
                include: Diet
            })

            let dietsMap = []
            dbRecipeId.diets.map((diet) => (
                dietsMap.push(diet.name)
            ))

            let objectResponse = {
                id: dbRecipeId.id,
                name: dbRecipeId.title,
                description: dbRecipeId.summary,
                score: dbRecipeId.spoonacularScore,
                healthy: dbRecipeId.healthScore,
                diets: dietsMap,
                //analyzedInstructions: dbRecipeId.analyzedInstructions,
                image: dbRecipeId.image
            }

            if (!dbRecipeId) return res.status(400).send('Invalid ID')
            return res.send(objectResponse)
        }
    }
    catch (error) {
        next(error)
    }

}

module.exports = {
    getRecipeById
}