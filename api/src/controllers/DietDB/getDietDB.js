const { Diet } = require('../../db')

const axios = require('axios').default

const { dbApi } = require('../../utils/config')

getDietsDB = async (_req, res) => {

    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`

        const info = await axios.get(url).then(result => result.data.results)

        let diets = info.map(elem => elem.diets)

        diets = diets.flat()

        diets = diets.filter((elem, index) => {
            return diets.indexOf(elem) === index
        })

        const modelDiets =
            [
                'gluten free',
                'dairy free',
                'lacto ovo vegetarian',
                'vegetarian',
                'vegan',
                'paleolithic',
                'pescatarian',
                'primal',
                'fodmap friendly',
                'whole 30',
            ]

         diets.forEach(diet => {
            if (diets.length === 0) {
                return modelDiets
            } else {
                Diet.findOrCreate({
                    where: {
                        name: diet
                    }
                })
            }
        })

        console.log("Dietas precargadas en la base de datos")

        const allDiets = await Diet.findAll()

        return res.send(allDiets)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getDietsDB
}
