// routes/recipeRoutes.js
const express = require('express');
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipeController');

const router = express.Router();

// /api/recipes
router.route('/')
  .post(createRecipe)
  .get(getAllRecipes);

// /api/recipes/:id
router.route('/:id')
  .get(getRecipeById)
  .put(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;
