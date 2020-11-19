const router = require('express').Router()
const Main = require('../controllers/main-control')
// const Buyer = require('../controllers/buyer-control')
// const Ticket = require('../controllers/ticket-control')

router.get('/', Main.home)


module.exports = router