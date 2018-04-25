const mongoose = require('mongoose');
const { Schema } = mongoose;
const MarvelSchema = new Schema({
  movie: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  }
});
const Marvel = mongoose.model('Marvel', MarvelSchema);
module.exports = Marvel;
