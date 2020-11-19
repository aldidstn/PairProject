const router = require('express').Router()
const session = require('express-session');
const UserController = require('../controllers/UserController')


router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: true 
    }
  }))

router.use((req,res, next) => {
    if(!req.session.userId){
      const error = 'Please Login first!!!!'
      res.send(error)
    }
    else{
      next()
    }
  })

  router.get('/', UserController.loginForm)
router.post('/', UserController.postLogin)

module.exports = router
