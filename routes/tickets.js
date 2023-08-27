var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets')


router.get('/flights/:id/tickets/new', ticketsCtrl.new );
router.delete('/tickets/:id', ticketsCtrl.delete );
router.post('/flights/:id/tickets', ticketsCtrl.create );


module.exports = router;