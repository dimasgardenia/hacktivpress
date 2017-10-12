const express = require('express')
const router = express.Router()
const Articles = require('../controllers/articleCont')

router.get('/articles', Articles.viewArticle)
router.post('/articles', Articles.postArticle)

module.exports = router
