// models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    ingredients: {
      type: [String], // array of strings
      required: [true, 'At least one ingredient is required'],
      validate: {
        validator: function (val) {
          return Array.isArray(val) && val.length > 0;
        },
        message: 'Ingredients array cannot be empty',
      },
    },
    instructions: {
      type: String,
      required: [true, 'Instructions are required'],
    },
    cookingTime: {
      type: Number, // in minutes
      min: [1, 'Cooking time must be at least 1 minute'],
    },
    servings: {
      type: Number,
      min: [1, 'Servings must be at least 1'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);
