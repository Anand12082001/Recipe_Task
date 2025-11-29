// app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// View engine (for minimal MVC completeness)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Home route (view)
app.get('/', (req, res) => {
  res.render('index');
});

// API routes
app.use('/api/recipes', recipeRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('💥 Error:', err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Server error',
  });
});

module.exports = app;
