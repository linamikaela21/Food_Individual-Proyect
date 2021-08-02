const Sequelize = require('sequelize');
//const { Op } = require("sequelize");
const { axios } = require('axios').default

//const getRecipes = require('../controllers/recipes')
//const { Recipe, Diet } = require('../../db');
//const { v4: uuidv4 } = require('uuid');

//const { dbApi } = require('../utils/config')
//const { API_KEY } = process.env;
const dbApi = 'f162743368684064b3c0d9bd4a87136d'

//=====>>> http://localhost:3001/recipes/ <=======

// router.use('/', getRecipes)

// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

// http://localhost:3001/recipes
function getRecipes (req, res, next) {
  res.send('Soy la funcion getRecipes')
}

module.exports = {
getRecipes
}