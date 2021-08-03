const { DataTypes } = require('sequelize');
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
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    id: { 
      type: DataTypes.UUID,
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV4,
    },
    description: {
      type: DataTypes.TEXT,
      //allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    healthy: {
      type: DataTypes.INTEGER,
    },
    steps: {
      type: DataTypes.TEXT,
    },
    image : {
      type: DataTypes.STRING
    }
  });
};

