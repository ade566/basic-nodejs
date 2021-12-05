const express = require('express')
const say = require('./module/say')
const app = express()
const port = 3000

const sayHello = say.hello('Muhamad Ade Rohayat')
const users = [
  { id: 1, 'name': 'Muhamad Ade Rohayat', 'job': 'Programmer' },
  { id: 2, 'name': 'Mila Safitri', 'job': 'Programmer' },
  { id: 3, 'name': 'Ilham Apriyadi', 'job': 'Desainer UI/UX' }
]

app.use(express.static(__dirname + '/public'));
app.set('views', './public/views')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index', { users })
})

app.get('/user/:id', (req, res) => {
  const index = users.findIndex(check)
  function check(index) {
    return index.id == req.params.id;
  }
  let user = users[index];
  res.render('user', { user })
})

app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}`)
})