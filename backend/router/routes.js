const UserController = require('../controllers/userController');

module.exports = (app) => {
  app.get('/api/test', (req, res) => {
    res.send({msg: 'oh herrrrrrro!'})
  })

  app.get('/api/users', UserController.readAll)
}
