const crypto = require('crypto')

module.exports = {
  generateSalt: () => {
    return crypto.randomBytes(128).toString('base64')
  },
  generateHashedPassword: (salt, passlord) => {
    return crypto.createHmac('sha256', salt).update(passlord).digest('hex')
  }
}
