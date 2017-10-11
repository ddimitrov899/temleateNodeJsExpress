const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

let port = process.env.PORT || 1337

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/blog_system_template',
    port: port
  },
  staging: {},
  production: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/blog_system_template',
    port: port
  }
}
