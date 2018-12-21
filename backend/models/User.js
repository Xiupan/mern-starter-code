const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
})

const User = mongoose.model('users', userSchema)

User.find({}, (err, users) => {
  if (err) {
    console.log(err);
  } else if (users.length === 0) {
    const user1 = new User({
      email: 'test@example.com',
      password: '1234',
      firstName: 'Alan',
      lastName: 'Hong'
    })
    const user2 = new User({
      email: 'test2@example.com',
      password: '1234',
      firstName: 'Josh',
      lastName: 'Miles'
    })
    user1.save()
    user2.save()
    console.log('Seeded DB with 2 new users.');
  }
})

module.exports = User
