const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['Alaska','American', 'Southwest', 'United'],
        required: true
    }, 
    airport: {
        type: String, 
        enum: ['PDX', 'DEN', 'DFW', 'LAX', 'BOS'],
        default: 'DEN',
        required: true
    },
    flightNo: {
        type: Number, 
        min: 10, 
        max: 9999,
        required: true
    },
    departs: {
        type: Date, 
        default: function() {
            const day = new Date().getDate();
            const month = new Date().getMonth();
            const nextYear =  new Date().getFullYear() + 1;
            return new Date(nextYear, month, day)
        }, 
        required: true
    }, 
    // destination: [destinationSchema], 
    // ticket: [{type: Schema.Types.ObjectId, ref: 'Ticket'}],
});

module.exports = mongoose.model('Flight', flightSchema);