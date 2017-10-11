const app = require('express')()
let env = process.env.NODE_ENV || 'development'
const settings = require('./server/config/settings')[env]

require('./server/config/database')(settings)
require('./server/config/express')(app)
require('./server/config/routes')(app)
require('./server/config/passport')()

app.listen(settings.port)

console.log(`App on potr :${settings.port}`)
