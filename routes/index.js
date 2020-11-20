const router = require('express').Router()
const session = require('express-session');
// const Main = require('../controllers/main-control')
const Buyer = require('../controllers/buyer-control')

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

router.get('/', HomeController.home)
router.use('/tickets', ticketRouter)
router.get('/buyers', Buyer.showBuyer)
router.get('/buyers/add', Buyer.addForm)
router.post('/buyers/add', Buyer.created)
router.get('/buyers/edit/:id', Buyer.editForm)
router.post('/buyers/edit/:id', Buyer.edit)
router.get('/buyers/delete/:id', Buyer.delete)


module.exports = router