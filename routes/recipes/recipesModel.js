const db = require('../../data/dbConfig');

const getRecipes = () => db('recipes');

const getShoppingList = recipe_id =>
  db('recipes as r')
    .select('i.ingredient_name', 'ri.quantity')
    .join('recipes_ingredients as ri', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where({ recipe_id });

const getInstructions = recipe_id =>
  db('recipes as r')
    .select('s.step_number', 's.instructions')
    .join('steps as s', 'r.id', 's.recipe_id')
    .where({ recipe_id })
    .orderBy('s.step_number', 'asc');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
