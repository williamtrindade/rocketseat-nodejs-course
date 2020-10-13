const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting app
const app = express();
app.use(express.json());

// Starting mongo db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);