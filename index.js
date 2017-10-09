const express = require('express')
const mongoose = require('mongoose')
let app = express()
mongoose.Promise = global.Promise
let env = process.env.NODE_ENV || 'development'
let port = process.env.PORT || 1337

app.get('/', (req, res) => {
  // Or `createConnection`
  let promise = mongoose.createConnection('mongodb://localhost:27017/blogsystemtemplate', {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
    /* other options */
  });
  promise.then(function(db) {
    /* Use `db`, for instance `db.model()`*/
      console.log('MongoDb Ready!')
      res.send('Hi!')
  });
  
})

app.listen(port)

console.log(`App on potr :${port}`)