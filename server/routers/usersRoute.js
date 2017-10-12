const express = require('express')
const app = express()
const router = express.Router()
const Users = require('../controllers/userCont')

router.post('/login', Users.login)
router.post('/register', Users.register)

module.exports = router
