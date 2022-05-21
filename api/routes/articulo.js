const router = require('express').Router();
const {getAllArticles, createArticle, updateArticle, deleteArticle,getArticlesMissing} = require('../controllers/articulo.js')

router.get('/', getAllArticles);

router.get('/reporte', getArticlesMissing);

router.post('/', createArticle);

router.put('/:id', updateArticle);

router.delete('/:id', deleteArticle)

module.exports = router;