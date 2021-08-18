const { getRecipes } = require('./Recipe/getRecipes')
const { getRecipeByName } = require('./Recipe/getRecipeByName')
const { getRecipeById } = require('./Recipe/getRecipeById')
const { postRecipe } = require('./Recipe/postRecipe')
const { deleteRecipe } = require('./Recipe/deleteRecipe')
const { changeRecipe } = require('./Recipe/changeRecipe')

const { getDiets } = require('./Diet/getDiet')

module.exports = {
    getRecipes,
    getRecipeByName,
    getRecipeById,
    postRecipe,
    getDiets,
    deleteRecipe,
    changeRecipe
}