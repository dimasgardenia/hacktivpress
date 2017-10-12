const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync("B4c0/\/", salt)
require('dotenv').config()

let haslogin = (req,res,next)=>{
  console.log('masuk has login')
  jwt.verify(req.headers.token, process.env.KEY,function(err,decoded){
    if(err){
      res.send("you must login first")
    }else{
      req._id = decoded._id
      next()
    }
  })
}

module.exports = {
  haslogin
}
