const router = require('express').Router();
const {getAllArticles, createArticle, updateArticle, deleteArticle} = require('../controllers/articulo.js')

router.get('/', getAllArticles);

router.post('/', createArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle)

module.exports = router;