const express = require('express')
const router = require('./routes')
const port = 5000
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.use('/', router);

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
})