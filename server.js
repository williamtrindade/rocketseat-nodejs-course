const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting app
const app = express();

// Starting mongo db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir('./src/models');
const Product = mongoose.model('Product');

// Routes
app.get('/', (req, res) => {
    Product.create({
        title: 'Laravel',
        description: 'Build like a artisan',
        url: 'http://github.com/laravel'
    });
    return res.send('Produto criado!');
});

app.listen(3001);