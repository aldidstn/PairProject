const router = require('express').Router()
const Controller = require('../controllers/Controller')

router.get('/', Controller.loginForm)
router.post('/', Controller.postLogin)

module.exports = router
