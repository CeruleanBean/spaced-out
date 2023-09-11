const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  user: String,
  quote: String,
  author: String,
  createdAt: Date,
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
