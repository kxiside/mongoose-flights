const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,
   
  }, {
    timestamps: true
  });


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'delta', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default:'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default:() => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    }
  },
  destinations:[destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)