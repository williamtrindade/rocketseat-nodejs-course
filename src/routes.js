const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

// Routes
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.get('/products/:id', ProductController.read);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes