const mongoose = require('mongoose')
const User = require('../data/User')
mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db, {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
  })

  let db = mongoose.connection

  db.once('open', (err) => {
    if (err) throw err

    console.log('MongoDB ready!')
    User.seedAdminUser()
  })

  db.on('error', (err) => console.log('Database error: ' + err))
}
