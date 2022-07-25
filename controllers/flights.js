const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  console.log('running')
  Flight.find({}, function (err, flights) {
    console.log(flights)
    res.render('flights/index', { title: 'All Flights', flights });
  });
}


function show(req, res) {
  Flight.findById(req.params.id)
    .populate('')
    .exec(function (err, flight) {
      flight.find(
        { _id: { $nin: flightNo } },
        function (err, flight) {
          res.render('flights/show', {
            title: 'Details',
          });
        }
      );
    });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  // req.body.ticketsAvailable = !!req.body.ticketsAvailable;
  console.log(req.body)
  var flight = new Flight(req.body);
  flight.save(function (err, flight) {
    console.log(flight, "create")
    // one way to handle errors
    // if (err) return res.redirect('flights/new');

    res.redirect(`/flights/${flight._id}`);
  });
}
