const DataTypes = require('sequelize').DataTypes;

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// Base de datos

//  Receta con las siguientes propiedades:
// ID: *
// Nombre *
// Resumen del plato *
// Puntuación
// Nivel de "comida saludable"
// Paso a paso 

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dishes: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    healthy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};

