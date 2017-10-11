const controllers = require('../controllers')

module.exports = (app) => {
    app.get('/', controllers.home.index)
    app.get('/about', controllers.home.about)
    
    // app.get('/', (req, res) => {
    //     // Or `createConnection`
    //     res.render('index')

    // })

    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found');
        res.end()
    });
}