const { Diet } = require('../../db')

const exclude = ['createdAt', 'updatedAt']

const getDietsDB = async (_req, res, next) => {
  try {
  let dbRecipes = await Diet.findAll({
    attributes: {
        exclude
    }
  })
    res.send(dbRecipes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getDietsDB
}
