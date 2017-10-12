const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync("B4c0/\/", salt)
require('dotenv').config()

let nowlogin = (req,res,next) => {
  jwt.verify(req.headers.token, process.env.KEY, function (err, decoded) {
    if (!err) {
      req._id = decoded._id
      next()
    } else {
      res.send(err)
    }
  })
}

module.exports = nowlogin
