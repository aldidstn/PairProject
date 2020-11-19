const router = require('express').Router()
const session = require('express-session');

const HomeController = require('../controllers/index.js')
const loginRouter = require('./loginRouter')
const registerRouter = require('./registerRouter')
const ticketRouter = require('./ticketRouter')


router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: true 
    }
  }))

router.use('/login', loginRouter)
router.use('/register', registerRouter)
  
// router.use((req,res, next) => {
//     if(!req.session.userId){
//       const error = 'Please Login first!!!!'
//       res.send(error)
//     }
//     else{
//       next()
//     }
//   })

router.get('/', HomeController.homePage)
router.use('/tickets', ticketRouter)


module.exports = router