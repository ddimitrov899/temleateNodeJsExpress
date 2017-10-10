const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = (settings) => {
    let promise = mongoose.createConnection(settings.db, {
        useMongoClient: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30
        /* other options */
    });
    // promise.once('open', (err) => {
    //     if (err) { 
    //         throw err
    //     }
    //     console.log('MongoDb Ready!')
    // })
    promise.then((db) =>  {
        /* Use `db`, for instance `db.model()`*/
        console.log('MongoDb Ready!')
    });
}