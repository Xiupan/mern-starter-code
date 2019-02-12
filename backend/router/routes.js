const UserController = require('../controllers/userController');
const Authentication = require('../controllers/authentication')

// passport is middleware in order to check tokens in the header of incoming requests
const passport = require('../services/passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})

module.exports = (app) => {
  app.post('/api/user/signup', Authentication.signup)
  app.post('/api/user/signin', requireSignin, Authentication.signin)

  // this is just a test route that does not require any authorization
  // a sanity check if you will lol
  app.get('/api/test-noauth', (req, res) => {
    res.send({msg: 'oh herrrrrrro!'})
  })

  // this test route is behind authentication so you can use this to test if your authorization header is correct on the frontend.
  app.get('/api/test', requireAuth, (req, res) => {
    res.send({msg: 'this message is behind authentication! Yay!'})
  })

  app.get('/api/users', UserController.readAll)
}
