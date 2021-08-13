const axios = require('axios').default

const { Recipe, Diet } = require('../../db');

const { dbApi } = require('../../utils/config')

// function getRecipeById (req, res, next) {
//     res.send('Soy la funcion getRecipeById')
// }

// http://localhost:3001/recipes/1

// getRecipeById = async (req, res, next) => {
//         const { id } = req.params
//         var recipe
//         try {
//             if (typeof id === 'string' && id.length > 10) {
//                 recipe = await Recipe.findByPk(id, {
//                     include: Diet
//                 })
//                 recipe = {
//                     id: recipe.id,
//                     name: recipe.name,
//                     image: recipe.image,
//                     diets: recipe.Diets.map((diet) => {
//                         return {
//                             id: diet.id,
//                             name: diet.name
//                         }
//                     })
//                 }
//             } else {
//                 const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${dbApi}&number=100`
//                 const apiRecipes = await axios.get(url)

//                 //Para obetener Steps
//                 let stepsMap = []
//                 apiRecipes.data.analyzedInstructions.map((inst) => (
//                     inst.steps?.map((s) => (
//                         stepsMap.push(s.step)
//                     ))
//                 ))

//                 const recipe = apiRecipes.data

//                 let objectResponse = {
//                     id: apiRecipesResult.id,
//                     vegetarian: apiRecipesResult.vegetarian,
//                     vegan: apiRecipesResult.vegan,
//                     glutenFree: apiRecipesResult.glutenFree,
//                     name: apiRecipesResult.title,
//                     image: apiRecipesResult.image,
//                     diets: apiRecipesResult.diets.map(elem => elem.toUpperCase() + ` - `),
//                     description: apiRecipesResult.summary,
//                     score: apiRecipesResult.spoonacularScore,
//                     healthy: apiRecipesResult.healthScore,
//                     steps: stepsMap
//                 }

//                 if (recipe) return res.send(objectResponse)

//             }
//         } catch (error) {
//             next(error)
//         }
// }
        getRecipeById = async (req, res, next) => {

            const { id } = req.params

            try {
                if (id.length < 10) {
                    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${dbApi}`
                    const apiRecipes = await axios.get(url)

                    const apiRecipesResult = apiRecipes.data

                    //Para obetener Steps
                    let stepsMap = []
                    apiRecipesResult.analyzedInstructions.map((inst) => (
                        inst.steps?.map((s) => (
                            stepsMap.push(s)
                        ))
                    ))

                    let objectResponse = {
                        id: apiRecipesResult.id,
                        name: apiRecipesResult.title.toUpperCase(),
                        image: apiRecipesResult.image,
                        diets: apiRecipesResult.diets.map(elem => elem.toUpperCase() + ` - `),
                        dishes: apiRecipesResult.dishTypes.map(elem => elem.toUpperCase() + ` - `),
                        description: apiRecipesResult.summary,
                        score: apiRecipesResult.spoonacularScore,
                        healthy: apiRecipesResult.healthScore,
                        steps: stepsMap
                        // steps: apiRecipesResult.analyzedInstructions.map(s => s.steps)
                    }

                    if (apiRecipesResult) return res.send(objectResponse)

                } else {
                    console.log(id, 'idATR')
                    const dbRecipeId = await Recipe.findOne({
                        where: {
                            id: id
                        },
                        include: Diet
                    })

                    // let dietsMap = []
                    // dbRecipeId.diets.map((diet) => (
                    //     dietsMap.push(diet.name + ` `)
                    // ))

                    let objectResponse = {
                        id: dbRecipeId.id,
                        name: dbRecipeId.name,
                        description: dbRecipeId.description,
                        dishes: apiRecipesResult.dishes,
                        score: dbRecipeId.score,
                        healthy: dbRecipeId.healthy,
                        diets: dbRecipeId.diets,
                        steps: dbRecipeId.steps,
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