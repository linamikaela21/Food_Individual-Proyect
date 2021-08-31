// const { getRecipes } = require('./RecipeAPI/getRecipes')
// const { getRecipeByName } = require('./RecipeAPI/getRecipeByName')
// const { getRecipeById } = require('./RecipeAPI/getRecipeById')
// const { postRecipe } = require('./RecipeAPI/postRecipe')
// const { deleteRecipe } = require('./RecipeAPI/deleteRecipe')

// const { getDiets } = require('./DietAPI/getDiet')

const { getRecipesDB } = require('./RecipeDB/getRecipesDB')
const { getRecipeByNameDB } = require('./RecipeDB/getRecipeByNameDB')
const { getRecipeByIdDB } = require('./RecipeDB/getRecipeByIdDB')
const { postRecipeDB } = require('./RecipeDB/postRecipeDB')
const { deleteRecipeDB } = require('./RecipeDB/deleteRecipeDB')
const { changeRecipeDB } = require('./RecipeDB/changeRecipeDB')

const { getDietsDB } = require('./DietDB/getDietDB')

module.exports = {
    // getRecipes,
    // getRecipeByName,
    // getRecipeById,
    // postRecipe,
    // getDiets,
    // deleteRecipe,
//  --------------
    getRecipesDB,
    getRecipeByNameDB,
    getRecipeByIdDB,
    postRecipeDB,
    getDietsDB,
    deleteRecipeDB,
    changeRecipeDB
}