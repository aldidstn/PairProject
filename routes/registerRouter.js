const router = require('express').Router()
const Controller = require('../controllers/Controller')

router.get('/', Controller.registerForm)
router.post('/', Controller.registerPostForm)
router.get('/', Controller.loginForm)


module.exports = router
