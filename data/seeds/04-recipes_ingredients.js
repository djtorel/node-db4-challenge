exports.seed = function(knex) {
  return knex('recipes_ingredients').insert([
    {
      quantity: 1,
      recipe_id: 1,
      ingredient_id: 1,
    },
    {
      quantity: 2,
      recipe_id: 1,
      ingredient_id: 2,
    },
    {
      quantity: 3,
      recipe_id: 1,
      ingredient_id: 3,
    },
    {
      quantity: 1,
      recipe_id: 2,
      ingredient_id: 4,
    },
    {
      quantity: 1,
      recipe_id: 2,
      ingredient_id: 5,
    },
  ]);
};
