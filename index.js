const express = require('express')
const say = require('./module/say')
const app = express()
const port = 3000

const sayHello = say.hello('Muhamad Ade Rohayat')

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/user/:name', (req, res) => {
  res.send(say.hello(req.params.name))
})

app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}`)
})