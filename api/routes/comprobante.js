const router = require('express').Router();
const {getAllComprobante, createComprobante, updateComprobante, deleteComprobante,getAllSales,getAllSalesForArticle,getAllSalesForClient} = require('../controllers/comprobante.js');

router.get('/',getAllComprobante);

router.get('/sales',getAllSales);

router.get('/salesArticle',getAllSalesForArticle);

router.get('/salesClient',getAllSalesForClient);

router.post('/', createComprobante);

router.put('/:id',updateComprobante);

router.delete('/:id', deleteComprobante);

module.exports = router; 