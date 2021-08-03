_______________________________________________________________

//PROMESAS
// router.post('/', (req, res) => {
//     const { name, image } = req.body
//     Recipe.create({
//         name,
//         image
//     })
//     .then(createdRecipe => {
//     res.json(createdRecipe)
// }) 
//     .catch(error => res.sendStatus(404))
// })

//ASYNC AWAIT 
// router.post('/', async (req, res) => {
//     const { name, image } = req.body
//     try {
//         const createdRecipe = await Recipe.create({
//             name,
//             image
//         })
//         res.json(createdRecipe)
//     } catch (error) {
//         console.log(error)
//     }
// })
