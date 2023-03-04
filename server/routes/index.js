/* 
   File: index.js
   Author: Kevin Dalling
   ID#: 301247589
   Date: March 4, 2023
   Web App Name:  My Favourite Books
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
