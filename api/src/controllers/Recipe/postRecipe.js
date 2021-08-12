const { Recipe, Diet } = require('../../db');

const { Op, where } = require("sequelize");

const { v4: uuidv4 } = require('uuid')

//  POST /recipe:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
// http://localhost:3001/recipes

// function postRecipe(req, res, next) {
//     res.send('Soy la funcion postRecipe')
// }

// http://localhost:3001/recipes/

// PARA EL POST DEL FORMULARIO PROMESAS

//MATI no funciona
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


//ESTE FUNCIONA SIN DIETS
// const postRecipe = async (req, res, next) => {

//     const {
//         name,
//         description,
//         score,
//         healthy,
//         steps,
//         image,
//         diets
//     } = req.body

//     0
//     try {

//         if (!name || !description) return res.status(404).json({})

//         const newRecipe = await Recipe.create({
//             name,
//             id: uuidv4(),
//             description,
//             score,
//             healthy,
//             steps,
//             image,
//         })

//         console.log(diets)

//         //Ignacio
//         diets.forEach(async diet => {
//             const dietasBD = await Diet.findOne({
//                 where: {
//                     name: diet
//                 }
//             })
//             newRecipe.addDiet(dietasBD)
//         })
//     }

//     catch (error) {
//         next(error)
//     }

//     const Response = await Recipe.findOne({
//         where: {
//             name: name
//         },
//         include: Diet
//     })

//     return res.status(200).send(Response)

// }

//EJEMPLO VISTO CON IGNACIO ME TRAE DIET VACIO
// const postRecipe = async (req, res, next) => {

//     const {
//         name,
//         description,
//         score,
//         healthy,
//         steps,
//         image,
//         diets
//     } = req.body

//     if (name && description) {
//         try {

//             const newRecipe = await Recipe.create({
//                 name,
//                 description,
//                 score,
//                 healthy,
//                 steps,
//                 image,
//             })

//             newRecipe = await newRecipe.addDiets(diets)

//             res.status(200).send(newRecipe)

//         } catch (error) {
//             next(error)
//         }
//     } else {
//         res.status(400).json("Faltan datos")
//     }
// }

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

    try {

        const newRecipe = await Recipe.create({
            name,
            description,
            score,
            healthy,
            steps,
            image,
        })

        const recipeDB = await Diet.findAll({
            where: {
                name: diets
            }
        })
        console.log(diets, 'soy DIEEEEEEEEEETS')
        console.log(recipeDB, 'ACA DEBERIA ENCONTRAR LA RECETA PARA HACER MATCH')
        console.log(newRecipe, 'SOY LA RECETA CREAAAAAAADAAAAAAA')
        newRecipe.addDiet(recipeDB)
        

        res.send('Recipe create succefully // Receta creada exitosamente')

    } catch (error) {
        next(error)
    }
}

module.exports = {
    postRecipe
}