const { Diet } = require('../../db')

const axios = require('axios').default

const { dbApi } = require('../../utils/config')

// function getDiets (req, res, next) {
//     res.send('Soy la funcion getDiets')
// }

getDiets = async (_req, res, next) => {

    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`

        const info = await axios.get(url).then(result => result.data.results)

        let diets = info.map(elem => elem.diets)

        diets = diets.flat()

        diets = diets.filter((elem, index )=> {
            return diets.indexOf(elem) === index
        })

        const modelDiets =
            [
                'Gluten free',
                'Dairy Free',
                'Vegan',
                'Lacto Ovo Vegetarian',
                'Vegetarian',
                'Pescetarian',
                'Paleo / Paleolithic',
                'Primal',
                'Whole30'
            ]

        diets.forEach(diet => {
            if (diets === []) {
                return modelDiets
            } else {
                Diet.findOrCreate({
                    where: {
                        name: diet
                    }
                })
            }
        })

        const allDiets = await Diet.findAll();
        return res.status(200).send(allDiets)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getDiets
}