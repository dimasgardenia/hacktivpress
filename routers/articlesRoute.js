const express = require('express')
const router = express.Router()
const Articles = require('../controllers/articleCont')
const Help = require('../helpers/jwt')

router.get('/', Articles.viewAllArticle)
router.get('/articles/:category', Articles.viewBycategory)
router.get('/articles',Help.haslogin, Articles.viewArticle)
router.post('/articles',Help.haslogin, Articles.postArticle)
router.put('/articles/:id',Help.haslogin, Articles.editArticle)
router.delete('/articles/:id',Help.haslogin, Articles.deleteArticle)

module.exports = router
