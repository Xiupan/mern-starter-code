const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;

// creating the User model schema
// refer to mongoose documentation for datatypes and other properties you can use
const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
})

// don't use a fat arrow function; because you need access to `this`
// this function hashes the password right before running .save(), which is a mongoose thing
userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

// don't use a fat arrow function; because you need access to `this`
// attaching a comparePassword method to the userSchema itself before exporting it
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err)
    }
    callback(null, isMatch)
  })
}

const ModelClass = mongoose.model('users', userSchema)

ModelClass.find({}, (err, users) => {
  if (err) {
    console.log(err);
  } else if (users.length === 0) {
    const user1 = new ModelClass({
      email: 'test@example.com',
      password: '1234',
      firstName: 'Alan',
      lastName: 'Hong'
    })
    const user2 = new ModelClass({
      email: 'test2@example.com',
      password: '1234',
      firstName: 'Josh',
      lastName: 'Miles'
    })
    // when .save() is run, because of the middleware on line 16, the password is encrypted/hashed
    user1.save()
    user2.save()
    console.log('Seeded DB with 2 new users.');
  }
})

// exporting the ModelClass
module.exports = ModelClass
