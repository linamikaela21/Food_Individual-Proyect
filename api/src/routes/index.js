const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipesRoutes = require('./recipes');
const dietsRoutes = require('./diets'); 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipesRoutes); // http://localhost:3001/recipes/
router.use('/types', dietsRoutes); //http://localhost:3001/types/

module.exports = router;
