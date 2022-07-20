const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
      }, 
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 999,
      }, 
      
    departs: {
        type: Number,
        required: true,
        min: 10,
        max: 999,
      }, 

    timestamps: true
      
  });
  
  module.exports = mongoose.model('Flight', flightSchema);