const axios = require('axios').default

const { Recipe, Diet } = require('../../db');

const { dbApi } = require('../../utils/config')

// function getRecipeById (req, res, next) {
//     res.send('Soy la funcion getRecipeById')
// }

// http://localhost:3001/recipes/1

getRecipeById = async (req, res, next) => {

    const { id } = req.params

    try {
        if (id.length < 8) {
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${dbApi}`
            const apiRecipes = await axios.get(url)

            const apiRecipesResult = apiRecipes.data

            //Para obetener Steps
            let stepsMap = []
            apiRecipesResult.analyzedInstructions.map(inst => (
                inst.steps?.map((s) => (
                    stepsMap.push(s)
                ))
            ))

            let objectResponse = {
                id: apiRecipesResult.id,
                name: apiRecipesResult.title,
                image: apiRecipesResult.image,
                diets: apiRecipesResult.diets,
                dishes: apiRecipesResult.dishTypes,
                description: apiRecipesResult.summary,
                score: apiRecipesResult.spoonacularScore,
                healthy: apiRecipesResult.healthScore,
                steps: stepsMap
            }

            if (apiRecipesResult) return res.send(objectResponse)
        } else {
            const dbRecipeId = await Recipe.findOne({
                where: {
                    id: id
                },
                include: Diet
            })

            let objectResponse = {
                id: dbRecipeId.id,
                name: dbRecipeId.name,
                description: dbRecipeId.description,
                dishes: dbRecipeId.dishes,
                score: dbRecipeId.score,
                healthy: dbRecipeId.healthy,
                diets: dbRecipeId.Diets.map(elem => elem.name),
                steps: dbRecipeId.steps,
                image: dbRecipeId.image
            }

            if (!dbRecipeId) return res.status(400).send('Invalid ID')
            return res.send(objectResponse)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRecipeById
}