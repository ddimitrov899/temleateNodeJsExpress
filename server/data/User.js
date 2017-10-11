const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')
const REQUIRE_VALIDATE_MASSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: REQUIRE_VALIDATE_MASSAGE,
    unique: true
  },
  firstName: { type: String, required: REQUIRE_VALIDATE_MASSAGE },
  lastName: { type: String, required: REQUIRE_VALIDATE_MASSAGE },
  salt: String,
  hashedPass: String,
  rules: [String]
})

userSchema.method({
  authenticate: (password) => {
    if (encryption.generateHashedPassword(this.salt, password) === this.hashedPass) {
      return true
    }
    return false
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User
module.exports.seedAdminUser = () => {
  User.find({}).then(users => {
    if (users.length > 0) {
      return
    }

    let salt = encryption.generateSalt()
    let hashedPass = encryption.generateHashedPassword(salt, 'Admin12')
    User.create({
      username: 'Admin',
      firstName: 'Admin',
      lastName: 'Adminov',
      salt: salt,
      hashedPass: hashedPass,
      rules: ['Admin']
    })
  })
}
