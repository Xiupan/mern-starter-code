const User = require('../models/User.js')

exports.readAll = (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err
      })
    } else {
      res.status(200).json(users)
    }
  })
}
