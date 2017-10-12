const Articlesdb = require('../models/articles')

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

let editArticle = (req, res) => {
  Articlesdb.update({
    id: req.params._id
  },{
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

let deleteArticle = (req, res) => {
  Articlesdb.remove({
    _id: req.params.id
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
  postArticle,
  editArticle,
  deleteArticle
}
