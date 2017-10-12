const Articlesdb = require('../models/users')

let viewArticle = (req, res) => {
  Articlesdb.find({}, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let postArticle = (req, res) => {
  Articlesdb.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  viewArticle,
  postArticle
}
