const express = require('express')
const router = require('./routes')
const session = require('express-session');
const port = 5000
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use(session({
  secret: 'login itu rahasia',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: true 
  }
}))
app.use((req,res, next) => {
  if(!req.session.userId){
    const error = 'Please Login first!!!!'
    res.send(error)
  }
  else{
    next()
  }
})

app.use('/', router);

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
})