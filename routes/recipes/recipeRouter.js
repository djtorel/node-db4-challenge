const router = require('express').Router();

const Recipes = require('./recipesModel');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/:id/shoppingList', async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingList = await Recipes.getShoppingList(id);
    res.status(200).json(shoppingList);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get shoppingList' });
  }
});

module.exports = router;
