et mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Article = new Schema({
  url: {type: String, require: true},
  categories: {type: Array, required: true},
  affiliation: {type: number, required: true}
});

module.exports = mongoose.model( 'Article', Article );
