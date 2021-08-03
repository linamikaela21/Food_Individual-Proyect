function getRecipeById (req, res, next) {
    res.send('Soy la funcion getRecipeById')
}

// http://localhost:3001/recipes/1
// router.get('/:id', async (req, res) => {
//     const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${A}&addRecipeInformation=true&params=${req.params.id}`)
//     res.json(res.data)
// })


module.exports = {
getRecipeById
}