PARA EL POST DEL FORMULARIO

router.post('/', (req, res) => {
    const {name, image} = req.body
    Recipe.create({
        name,
        image
    })
}).then(createdRecipe => {
    res.json(createdRecipe)
})
.catch(error => res.sendStatus(404))

router.get('/', async (req, res) => {
    const { name } = req.query
    try {
        var apiRecepesPromise = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${name}`)
        var dbRecepesPromise = await Recipe.findAll({
           where:  {name: {
             [Op.iLike]: `%{name}%`
           }},
        include: Diet
        })
        return Promise.all([
            apiRecepesPromise,
            dbRecepesPromise
        ])
            .then(resultado => {
                var apiRecepes = resultado[0].data.results
            var dbRecepes = resultado[1]
            var allRecipes = apiRecepes.concat(dbRecepes)
            res.send(allRecipes)
            })
        
    } catch (error) {
        res.status(500).json({error: 'No se han encontrado las recetas'})
    }
})




//ASYNC AWAIT
// getRecipes = async (req, res, next) => {

//     try {
//         var apiRecepesAsync = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${title}`)
//         var dbRecepesAsync = await Recipe.findAll({
//             include: Diet
//         })
//         if (dbRecepesAsync.length === 0) return res.send(apiRecepesAsync.data.results)

//         let arrayResponse = []

//         const concatRecipes = arrayResponse.concat(getRecepes.data.results)

//         return res.send(concatRecipes)
//     } catch (error) {
//         next(error)
//     }

// }


// http://localhost:3001/recipes/name
getRecipe = ('/', (req, res) => {
    return Recipe.findAll({
        include: Diet
    })
 }).then((recipes) => {
     return res.json(recipes)
 })


//PROMESAS
//  router.get('/name', (req, res) => {
//     const { title } = req.query
//     var apiRecepesPromese = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${dbApi}&addRecipeInformation=true&query=${title}&number=10`)

//     var dbRecepesPromese = Recipe.findAll({
//       include: Diet
//     })

//     return Promise.all([
//       apiRecepesPromese,
//       dbRecepesPromese
//     ]).then(res => {
//       var apiRecepes = res[0].data.results
//       var dbRecepes = res[1]
//       var allRecepes = apiRecepes.concat(dbRecepes)
//       res.send([...allRecepes, ...recipes])

// }).catch(error => res.status(500).json({error: 'No se han encontrado las recetas'}))
// })


// http://localhost:3001/recipes/1
// router.get('/:id', async (req, res) => {
//     const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${A}&addRecipeInformation=true&params=${req.params.id}`)
//     res.json(res.data)
// })


________________________________________________________________

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
