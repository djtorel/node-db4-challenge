exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'koolaid' },
    { recipe_name: 'cereal' },
  ]);
};
