const User = require('../models/User.js')

// function to find all Users and send it to the frontend as JSON
exports.readAll = (request, response, next) => {
  User.find((err, users) => {
    if (err) {
      response.status(500).json({
        success: false,
        error: err
      })
    } else {
      response.status(200).json(users)
    }
  })
}
