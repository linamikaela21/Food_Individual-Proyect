_______________________________________________________________

Si se rompe y bajas de nuevo el repo, acordate de hacer npm i en api y en client

DENTRO DE API CREAR UN ARCHICO .env copia y pega eso y CAMBIA LA API POR LA TUYA !!!!!!!

DB_USER=postgres
DB_PASSWORD=Lali
DB_HOST=localhost
DB_NAME: food

API_KEY = de6f15017bd041ca9cc24bde0dac2f45




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
