const express = require('express')
const router = require('./routes')
const session = require('express-session');
const app = express()
const port = 3000
const router = require('./router/router')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use('/', router);

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
})