exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'koolaid mix' },
    { ingredient_name: 'sugar' },
    { ingredient_name: 'water' },
    { ingredient_name: 'coa-coa puffs' },
    { ingredient_name: 'milk' },
  ]);
};
