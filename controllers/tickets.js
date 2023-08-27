const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}

function deleteTicket(req, res) {
    Ticket.deleteOne({_id:req.params.id})
        .then(ticketDoc => {
            console.log('this is the deleted ticket',ticketDoc)
            console.log('this is my flight',ticketDoc.flight)
            res.redirect(`/flights`);
        })
  }

function newTicket(req,res){
    res.render('tickets/new', { flightId:req.params.id, errorMsg: '' })
}

function create(req,res){
    req.body.flight = req.params.id
    Ticket.create(req.body)
        .then(ticketDoc => {
            console.log('this is ticket created',ticketDoc)
            return res.redirect('/flights')
        })

    }