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
postRecipe = async (req, res) => {
    const {
        name,
        description,
        score,
        healthy,
        steps,
        image,
        diets
    } = req.body

    const createdRecipe = await Recipe.create({
        name,
        id: uuidv4(),
        description,
        score,
        healthy,
        steps,
        image,
    })

    
    const createDiet = await Diet.findAll({        
        where: {
            name: name
          }
    })

    let createdDiet = []
    createDiet.map(elem => {
        createDiet.push(elem.name)
    })

    console.log(createdDiet)
    await createdRecipe.addDiets(createdDiet)
    return res.status(200).send('Receta creada con exito // Recipe created successfully')
}

// PARA EL POST DEL FORMULARIO

// router.post('/', (req, res) => {
//     const {name, image} = req.body
//     Recipe.create({
//         name,
//         image
//     })
// }).then(createdRecipe => {
//     res.json(createdRecipe)
// })
// .catch(error => res.sendStatus(404))


module.exports = {
    postRecipe
}