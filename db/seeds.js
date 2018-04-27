require('dotenv').config()
const mongoose = require('mongoose')
const { Creature } = require('./schema')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
// using Promises
Creature.remove().then(() => {
  const luke = new Creature({name: 'Luke', description: 'Jedi'})
  return luke.save()
}).then(() => {
  const darth = new Creature({name: 'Darth Vader', description: 'Father of Luke'})
  return darth.save()
}).then(() => {
  db.close()
})