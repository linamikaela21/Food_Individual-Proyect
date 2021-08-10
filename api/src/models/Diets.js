const { DataTypes } = require('sequelize');

// Base de datos

//  Tipo de dieta con las siguientes propiedades:
// ID
// Nombre

module.exports = sequelize => {
  sequelize.define('Diet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}