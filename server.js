require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
  console.log(err)
})

db.on('open', () => {
  console.log('Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/public/index.html`)
  })


app.get('/', (req, res) => {
  res.send("Hello from the Server")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('====================================')
  console.log('App is up and running on port ' + PORT)
  console.log('====================================')
})
