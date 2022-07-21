const Flight = require('../models/flight');

module.exports = {
    index,

};

function index(req, res) {
    console.log('running')
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All Flights', flights });
    });
  }

