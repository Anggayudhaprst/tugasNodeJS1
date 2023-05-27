var express = require('express');
var router = express.Router();

// Home route
router.get('/', function(req, res, next) {
  res.send('Welcome to the home page');
});

// About route
router.get('/about', function(req, res, next) {
  res.send('This is the about page');
});

// Contact route
router.get('/contact', function(req, res, next) {
  res.send('Contact us at example@example.com');
});

module.exports = router;
