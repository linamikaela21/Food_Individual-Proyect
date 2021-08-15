const { Router } = require('express');

const { getDiets } = require('../controllers/index')

const router = Router()

//=====>>> http://localhost:3001/types/ <=======

//  GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá

//http://localhost:3001/types/
router.get('/', getDiets)

module.exports = router;