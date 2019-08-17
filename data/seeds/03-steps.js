exports.seed = function(knex) {
  return knex('steps').insert([
    {
      step_number: 1,
      instructions: 'add koolaid mix to pitcher',
      recipe_id: 1,
    },
    {
      step_number: 2,
      instructions: 'add sugar',
      recipe_id: 1,
    },
    {
      step_number: 3,
      instructions: 'add water',
      recipe_id: 1,
    },
    {
      step_number: 4,
      instructions: 'stir',
      recipe_id: 1,
    },
    {
      step_number: 1,
      instructions: 'add coa-coa puffs to bowl',
      recipe_id: 2,
    },
    {
      step_number: 2,
      instructions: 'add milk to bowl',
      recipe_id: 2,
    },
  ]);
};
