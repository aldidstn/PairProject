const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.loginForm)
router.post('/', UserController.postLogin)


module.exports = router
