const Articlesdb = require('../models/articles')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync("B4c0/\/", salt)
require('dotenv').config()

let viewAllArticle = (req, res) => {
  Articlesdb.find({}, function(err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send()
    }
  })
}

let viewBycategory = (req, res) => {
  Articlesdb.find({category: req.params.category}, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}


let viewArticle = (req, res) => {
  Articlesdb.find({author: req._id})
  .populate('author').
  exec(function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}


let postArticle = (req, res) => {
  let tokvery = jwt.verify(req.headers.token, process.env.KEY)
  Articlesdb.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: tokvery
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
    id: req.params._id,
    author: req._id
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
  viewAllArticle,
  viewBycategory,
  viewArticle,
  postArticle,
  editArticle,
  deleteArticle
}
