const { Diet } = require('../../db')

const axios = require('axios').default

const { dbApi } = require('../../utils/config')

// function getDiets (req, res, next) {
//     res.send('Soy la funcion getDiets')
// }

getDiets = async (req, res, next) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=2`
    
    const info = await axios.get(url).then(result => result.data.results)

    let diets = info.map(elem => elem.diets)
    
    diets = diets.flat()
    
    diets.forEach(diet => {
        Diet.findOrCreate({
            where: {
                name: diet
            }
        })
    })

    const allDiets = await Diet.findAll();
    return res.status(200).send(allDiets)
}


// getDiets = (_req, res, next)  => {
//     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&number=100`
//     var apiRecipePromise = axios.get(url)
//     var dbRecipePromise = Recipe.findAll()
  
//     return Promise.all([
//       apiRecipePromise,
//       dbRecipePromise
//     ]).then(resultados => {
//       var apiRecipes = resultados[0].data.results
//       var dbRecipes = resultados[1]
  
//       apiRecipes.map(diet => (
//           for (let i = 0; i < diet.length; i++) diet[i]})

//       //   var dietsBDMap = []
//       // dbRecipes.diets.map(diet => (
//       //   dietsMap.push(diets.name)
//       // ))
  
//       //aca los normalizo
//       apiRecipes = apiRecipes.map((receta) => {
//         return {
//           id: receta.id,
//           name: receta.title,
//           diets: receta.diets.map(d => d),
//         }
//       })
//       dbRecipes = dbRecipes.map((receta) => {
//         return {
//           id: receta.id,
//           name: receta.name,
//           diets: receta.diets.map(d => d),
//         }
//       })
//       //aca los uno
//       var allRecipes = apiRecipes.concat(dbRecipes)
//       res.send(allRecipes)
//     })
//       .catch(error => next(error))
//   }
  

module.exports = {
getDiets
}