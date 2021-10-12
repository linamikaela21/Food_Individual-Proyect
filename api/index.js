const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { FORCE, PORT } = process.env
const force = JSON.parse(FORCE)

//Lo agrego para que al iniciar el servidor precargue mi Base de Datos
const { getDataFromApi }  = require('./src/controllers/RecipeDB/getDataFromApi')

// Syncing all the models at once.
conn.sync({ force })
.then(() => force ? getDataFromApi() : null)
.then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`); // eslint-disable-line no-console
  })
})
.catch((err) => console.error(err))