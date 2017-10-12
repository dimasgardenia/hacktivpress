const express = require('express')
const router = express.Router()
const Articles = require('../controllers/articleCont')

router.get('/articles', Articles.viewArticle)
router.post('/articles', Articles.postArticle)
router.put('/articles/:id', Articles.editArticle)
router.delete('/articles/:id', Articles.deleteArticle)

module.exports = router
