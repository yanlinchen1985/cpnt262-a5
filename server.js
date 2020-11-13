// Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Products = require(`./models/product.js`);

// Create express app
const app = express();

// Set view engine
app.set('view engine','ejs')

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Connect to DB
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('connected to DB...');
});


// Json endpoint for all objects
app.get('/api/v0/products', (req, res) => {
  Products.find({}, (err, data) => {
    if (err) {
      res.send('Could not retrieve products')
    }
    else {
      res.json(data);
    }
  });
});

// JSON endpoint. Return for individual objects
app.get('/api/v0/products/:id', (req, res) => {
  let productId = req.params.id;
  Products.findOne({id: productId}, (err, data) => {
    if (err || data===null) {
      res.send('Could not find product');
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});