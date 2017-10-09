const express = require('express')
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')

let app = express()
mongoose.Promise = global.Promise
let env = process.env.NODE_ENV || 'development'
let port = process.env.PORT || 1337

app.engine('handlebars', handlebars({
    defaultLayout: "main"
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    // Or `createConnection`
    let promise = mongoose.createConnection('mongodb://localhost:27017/blogsystemtemplate', {
        useMongoClient: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30
        /* other options */
    });
    promise.then(function (db) {
        /* Use `db`, for instance `db.model()`*/
        console.log('MongoDb Ready!')
        res.render('index')
    });

})

app.listen(port)

console.log(`App on potr :${port}`)