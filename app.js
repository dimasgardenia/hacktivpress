const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

link = 'mongodb://localhost/hacktivpress'
mongoose.connect(link)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const articles = require('./routers/articlesRoute')
const users = require('./routers/userRoute')

app.use('/api', articles)

app.use('/', users)

app.listen(3000)
