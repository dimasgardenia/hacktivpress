const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UsersSchema = new Schema({
  username: String,
  password: String,
  email: String
})

var Users = mongoose.model('Users', UsersSchema)

module.exports = Users
