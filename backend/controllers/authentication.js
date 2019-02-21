const jwt = require('jwt-simple')
const User = require('../models/User')
const config = require('../config/keys')

// custom function to encode the user's id, a timestamp, and the jwtSecret all together to get a valid token
const tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.jwtSecret)
}

// signin should take the user from the body of the request, pass that into tokenForUser, which is the function we created above, and then send that token to the frontend.
exports.signin = (req, res, next) => {
  const token = tokenForUser(req.user)
  res.json({token: token})
}

// signup takes in an email and password from the request, checks if the email is in the DB already, if it's not in use, it creates a new User, saves it, then gets a token and returns it to the frontend. The frontend can use that token to log the user in.
exports.signup = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an email and password.' })
  }

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err)
    }
    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use.'})
    }

    const user = new User({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    })

    user.save((err) => {
      if (err) {
        return next(err)
      }
      user.password = 'HIDDEN'
      token = tokenForUser(user)
      res.json({token: token})
    })
  })
}
