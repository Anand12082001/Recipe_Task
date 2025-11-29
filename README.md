
# Recipes App (Node.js + Express + MongoDB)

A simple CRUD (Create, Read, Update, Delete) REST API for managing recipes, built with Node.js, Express.js, and Mongoose following the MVC pattern.

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- Postman (for API testing and documentation)

## Features

- Create a new recipe
- Get all recipes
- Get a recipe by ID
- Update a recipe by ID
- Delete a recipe by ID
- Proper error handling and basic validation
- MVC structure (models, views, controllers)
- Postman collection with sample requests and responses

## Project Structure

```txt
config/          # DB connection
controllers/     # Business logic (recipeController)
models/          # Mongoose models (Recipe)
routes/          # Express routes (recipeRoutes)
views/           # Basic EJS view for home page
app.js           # Express app setup
server.js        # Server entry point
