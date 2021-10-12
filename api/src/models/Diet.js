const { DataTypes } = require('sequelize');

// Base de datos

//  Tipo de dieta con las siguientes propiedades:
// ID
// Nombre

module.exports = sequelize => {
  sequelize.define('Diet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}