let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Article = new Schema({
  url: {type: String, required: true},
  categories: {type: String },
  affiliation: {type: Number, required: true}
});

module.exports = mongoose.model( 'Article', Article );
