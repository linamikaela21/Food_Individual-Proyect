const { getRecipes } = require('./Recipe/getRecipes')
const { getRecipeByName } = require('./Recipe/getRecipeByName')
const { getRecipeById } = require('./Recipe/getRecipeById')
const { postRecipe } = require('./Recipe/postRecipe')

const { getDiets } = require('./Diet/getDiet')

module.exports = {
    getRecipes,
    getRecipeByName,
    getRecipeById,
    postRecipe,
    getDiets
}