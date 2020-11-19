const router = require('express').Router()
const HomeController = require('../controllers/index.js')
const loginRouter = require('./loginRouter')
const registerRouter = require('./registerRouter')


router.get('/', HomeController.homePage)
router.use('/login', loginRouter)
router.use('/register', registerRouter)


module.exports = router