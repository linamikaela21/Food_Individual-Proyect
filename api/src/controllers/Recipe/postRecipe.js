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

// FUNCIONAAAAA CON DIETAAAAAAAAAAAAAAAAAS PERO PASANDOLE ID

async function postRecipe(req, res) {
    const {
        name,
        description,
        dishes,
        score,
        healthy,
        steps,
        image,
        diets
    } = req.body


      if (!name || !description) return res.status(404).json({})

        const newRecipe = await Recipe.create({
                name: name,
                description: description,
                dishes: dishes,
                score: score,
                healthy: healthy,
                image: image, 
                steps: steps
        }) 

        for(let i = 0; i < diets.length; i++) {
          await newRecipe.addDiet(diets[i], {through: 'recipe_diet'})
        }

        console.log(newRecipe, 'soooooooy new con dieeeeeeeeeeeeeets')

        const recipes_diets = await Recipe.findAll({
          where: {
            name: name
          },
          include: Diet 
        })

        console.log(recipes_diets, 'heeeeeeeeeeellowwwwwwwwwwwwwwwww')
    
        return res.json(recipes_diets) 
    } 

//ESTE FUNCIONA SIN DIETS
// const postRecipe = async (req, res, next) => {

//     const {
//         name,
//         description,
//         dishes,
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
//             dishes,
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
//         dishes,
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
//                 dishes,
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


///ULTIMA PRUEBAAAAAAAAAAAAAAAAAAAAAAA

// const postRecipe = async (req, res, next) => {

//     const {
//         name,
//         description,
//         dishes,
//         score,
//         healthy,
//         steps,
//         image,
//         diets
//     } = req.body

//     try {

//         const newRecipe = await Recipe.create({
//             name,
//             description,
//             dishes,
//             score,
//             healthy,
//             steps,
//             image,
//         })

//         //ACA LO ENCUENTRA
//         const recipeDB = await Diet.findOne({
//             where: {
//                 name: diets
//                 //id: diets
//             }
//         })

//         console.log(diets, 'soy DIEEEEEEEEEETS')
//         console.log(recipeDB, 'ACA DEBERIA ENCONTRAR LA RECETA PARA HACER MATCH')

//         newRecipe.addDiet(recipeDB)
//         console.log(newRecipe, 'SOY LA RECETA CREAAAAAAADAAAAAAA')
        

//         res.send('Recipe create succefully // Receta creada exitosamente')

//     } catch (error) {
//         next(error)
//     }
// }

module.exports = {
    postRecipe
}