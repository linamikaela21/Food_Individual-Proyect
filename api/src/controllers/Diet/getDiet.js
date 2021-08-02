const { Diet } = require('../../db')
const axios = require('axios').default

const { API_KEY } = process.env

function getDiets (req, res, next) {
    res.send('Soy la funcion getDiets')
}

module.exports = {
getDiets
}