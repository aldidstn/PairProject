const router = require('express').Router()
const Controller = require('../controllers/Controller')

router.get('/add', Controller.addForm)
router.post('/add', Controller.addPost)
router.get('/:id/edit', Controller.editForm)
router.post('/:id/edit', Controller.editPost)
router.get('/:id/delete', Controller.deleteTicket)




module.exports = router
