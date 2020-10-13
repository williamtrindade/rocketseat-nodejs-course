const express = require('express');
const mongoose = require('mongoose');

// Starting app
const app = express();

// Starting mongo db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// Routes
app.get('/', (req, res) => {
    res.send('Hello 1');
});

app.listen(3001);