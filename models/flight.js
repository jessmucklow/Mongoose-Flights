const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
	airport: {
		type: String,
		enum: [ 'AUS', 'DFW', 'DEN', 'LAX', 'SAN' ],
        required: true
	},
	arrival: Date
});

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['Alaska','American', 'Southwest', 'United'],
        default: 'American',
        required: true
    }, 
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
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
        // default: function() {
        //     const day = new Date().getDate();
        //     const month = new Date().getMonth();
        //     const nextYear =  new Date().getFullYear() + 1;
        //     return new Date(nextYear, month, day)
        // }, 
        // required: true
    }, 
    destination: [destinationSchema]
    // ticket: [{type: Schema.Types.ObjectId, ref: 'Ticket'}],
});

module.exports = mongoose.model('Flight', flightSchema);