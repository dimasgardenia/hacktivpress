const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ArticlesSchema = new Schema({
  title : String,
  content: String,
  category: String,
  author: {type: Schema.Types.ObjectId, ref: "Users"}
})

var Articles = mongoose.model('Articles', ArticlesSchema)

module.exports = Articles
