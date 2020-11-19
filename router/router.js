const router = require('express').Router()
const Main = require('../controllers/main-control')
const Buyer = require('../controllers/buyer-control')
// const Ticket = require('../controllers/ticket-control')

router.get('/', Main.home)
router.get('/buyers', Buyer.showBuyer)
router.get('/buyers/add', Buyer.addForm)
router.post('/buyers/add', Buyer.created)
router.get('/buyers/edit/:id', Buyer.editForm)
router.post('/buyers/edit/:id', Buyer.edit)
router.get('/buyers/delete/:id', Buyer.delete)

module.exports = router