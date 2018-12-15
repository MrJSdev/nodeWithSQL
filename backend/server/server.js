const express = require('express')
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
const bodyParser = require('body-parser')
const {sequelize} = require('../db/config')
const {BlogPost} = require('../db/models/AddContent')

const port = 4000


app.use(bodyParser.json())
app.get('/', (req, res) => {
  BlogPost.findAll().then((result) => {
    res.send(result)
  })
})

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('success')
  sequelize.sync()
  .then(() => BlogPost.create(req.body))
  .then((result) => {
    console.log(result.dataValues)
  })
})
app.get('/user/', (req, res) => {
  let param = req.body.position
  BlogPost.findAll({where:{position: param}}).then((result) => {
    res.send(result)
  })
})
// app.delete('/user/:id', (req, res) => {
//   let param = req.params.id
//   BlogPost.Delete(param).then((result) => {
//     res.send(result)
//   })
// })
app.listen(port, () => {
  console.log('Server is started on port ' + port)
})
