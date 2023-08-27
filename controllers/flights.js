const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
    show  
};



async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
  }

function newFlight(req, res) {
    const newFlight = new Flight()
    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights')
    });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', { flight })

}





