/* 
   File: books.js
   Author: Kevin Dalling
   ID#: 301247589
   Date: March 4, 2023
   Web App Name:  My Favourite Books
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
