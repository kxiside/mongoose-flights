const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema({

    airline: {
        type: String,
        enum: ['American', 'Southwest', 'Delta', 'Unitied']
    },
    
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
        default: 'DEN'
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },

    departs: {
        type: Number,
        defautl: function() {
            return new Date().getFullYear() + 1
        }
    }

})

module.exports = mongoose.model('Flights', flightSchema)