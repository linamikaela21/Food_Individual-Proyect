function postRecipe (req, res, next) {
    res.send('Soy la funcion postRecipe')
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