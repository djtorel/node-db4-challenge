const db = require('../../data/dbConfig');

const getRecipes = () => db('recipes');

const getShoppingList = recipe_id =>
  db('recipes as r')
    .select('i.ingredient_name', 'ri.quantity')
    .join('recipes_ingredients as ri', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where({ recipe_id });

module.exports = {
  getRecipes,
  getShoppingList,
};
