const { Recipe, Diet } = require('../../db');

const { Op } = require("sequelize");

const { v4: uuidv4 } = require('uuid')

//  POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
// http://localhost:3001/recipes

// function postRecipe(req, res, next) {
//     res.send('Soy la funcion postRecipe')
// }

// http://localhost:3001/recipes/
// postRecipe = async (req, res, next) => {
//     const {
//         name,
//         description,
//         score,
//         healthy,
//         steps,
//         image,
//         diets
//     } = req.body
    
//     try {
//     if (!name || !description) return res.status(404).json({})
    
//     const createdRecipe = await Recipe.create({
//             name,
//             id: uuidv4(),
//             description,
//             score,
//             healthy,
//             steps,
//             image,
//         })
    
//        for (let i = 0; i < diets.length; i++) {
//         await createdRecipe.addDiet(diets[i], { through: 'Recipes_Diets' })
//     }
    
    
//         const createDiet = await Diet.findAll({        
//             where: {
//                 name: name
//               },
//               include: Diet
//         })
//         console.log(createDiet)

//         return res.status(200).send('Receta creada con exito // Recipe created successfully')
// } catch (error) {
//     next(error)
// }    


// PARA EL POST DEL FORMULARIO
//MATI
// postRecipe = (req, res, next) => {
//     const {
//         name,
//         description,
//         score,
//         healthy,
//         steps,
//         image,
//         diets
//     } = req.body

//     Recipe.create({
//         name,
//         id: uuidv4(),
//         description,
//         score,
//         healthy,
//         steps,
//         image,
//     }).then(createdRecipe => {
//         return createdRecipe.setDiets(diets)
//     })
//         .then((recipeWithDiets) => {
//             res.json(recipeWithDiets)
//         })
//         .catch(error => next(error))

//     }

const postRecipe = async (req, res, next) => {

    const {
        name,
        description,
        score,
        healthy,
        steps,
        image,
        diets
    } = req.body

    const id = uuidv4();
try {

    if (!name || !description) return res.status(404).json({})
    const newRecipe = await Recipe.create({
        name,
        id,
        description,
        score,
        healthy,
        steps,
        image,
    })

    for (let i = 0; i < diets.length; i++) {
        await newRecipe.addDiet(diets[i], { through: 'Recipes_Diets' })
    }

    const recipes_diets = await Recipe.findOne({
        where: {
            name: name
        },
        include: Diet
    })

    return res.json(recipes_diets)
    
} catch (error) {
    next(error)
}
}

module.exports = {
    postRecipe
}