const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  locationName: { type: String, required: true },
  itemName: {type: String, required:true},
  itemSummary: {type: String, required:true},
  itemType: {type: String, required:true},
  itemCost: {type: Number, required:true},
  itemStock: {type: Number, required:true},

 
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;