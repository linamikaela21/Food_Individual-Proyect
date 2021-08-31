const axios = require('axios').default
const { Recipe, Diet } = require('../../db');
const { Op } = require("sequelize");
const { dbApi } = require('../../utils/config')


// http://localhost:3001/recipes/1

deleteRecipe = async (req, res, next) => {

    const { id } = req.params

    try {
        if(id.length > 8) {
        const elem = await Recipe.destroy({
            where: { id: {[Op.eq]: id }}        
        })

        res.sendStatus(200)
        } else {
            const urlId = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${dbApi}`
            const apiRecipesDelete = await axios.delete(urlId).then(res => res.data);

            res.sendStatus(200)
        }
    } 
    catch (error) {
        next(error)
    }
}

module.exports = {
    deleteRecipe
}