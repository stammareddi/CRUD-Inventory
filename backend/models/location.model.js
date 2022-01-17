const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  locationName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;