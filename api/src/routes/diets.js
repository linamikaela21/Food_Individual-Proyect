const { Router } = require('express');
//const { Diet } = require('../models/Diet')

const router = Router()

//=====>>> http://localhost:3001/types/ <=======

//  GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá

router.get('/diets', (req, res) => {
    res.send('diets')
 })
 
 module.exports = router