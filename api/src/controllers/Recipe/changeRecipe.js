const { Recipe } = require('../../db');

// http://localhost:3001/recipes/1

changeRecipe = async (req, res, next) => {

    const { id } = req.params

    try {
    
    } catch (error) {
        next(error)
    }
}

module.exports = {
    changeRecipe
}