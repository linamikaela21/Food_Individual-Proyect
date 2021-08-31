const { Recipe, Diet } = require('../../db');
const { Op } = require("sequelize");

// http://localhost:3001/recipes/1

deleteRecipeDB = async (req, res, next) => {

    const { id } = req.params

    try {
        const elem = await Recipe.destroy({
            where: { id: {[Op.eq]: id }}        
        })

        res.sendStatus(200)
    } 
    catch (error) {
        next(error)
    }
}

module.exports = {
    deleteRecipeDB
}