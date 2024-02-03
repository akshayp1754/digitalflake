const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
    type: String,
  },
  Description: {
    type: String,
    
  },
  value: {
    type: String,
    
  },
  user: {
    type: String,
  }
});

module.exports.Category = mongoose.model('Category', categorySchema);


