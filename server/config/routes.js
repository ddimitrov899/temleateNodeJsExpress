module.exports = (app) => {
    app.get('/', (req, res) => {
        // Or `createConnection`
        res.render('index')

    })

    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found');
        res.end()
    });
}