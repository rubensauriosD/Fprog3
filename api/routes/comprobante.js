const router = require('express').Router();
const {getAllComprobante, createComprobante, updateComprobante, deleteComprobante} = require('../controllers/comprobante.js');

router.get('/',getAllComprobante);

router.post('/', createComprobante);

router.put('/:id',updateComprobante);

router.delete('/:id', deleteComprobante);

module.exports = router;