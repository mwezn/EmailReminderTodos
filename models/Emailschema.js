var mongoose = require('mongoose');
var bcrypt=require('bcrypt')
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  log: [],
  overdue: [],
  done: []


});
//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});


mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection





db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected from model file')
})







var User = mongoose.model('User', UserSchema);
module.exports = User;
