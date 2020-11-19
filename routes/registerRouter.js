const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.registerForm)
router.post('/', UserController.registerPostForm)
router.get('/', UserController.loginForm)




module.exports = router
