module.exports = {

  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/users/login')
    }
  },

  isInRole: (role) => {
    return (req, res, next) => {
      if (req.isAuthenticated() && req.user.rules.indexOf(role) > -1) {
        next()
      } else if (req.isAuthenticated() && req.user.rules.indexOf(role) === -1) {
        res.render('users/login', { globalError: 'Not have accessed please login with another username' })
      } else {
        res.redirect('/users/login')
      }
    }
  }
}
