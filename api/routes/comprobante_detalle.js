const router = require('express').Router();
const {getAllComprobanteDetalle, createComprobanteDetalle, updateComprobanteDetalle, deleteComprobanteDetalle} = require('../controllers/comprobanteDetalle.js');

router.get('/', getAllComprobanteDetalle);

router.post('/', createComprobanteDetalle);

router.put('/:id', updateComprobanteDetalle);

router.delete('/:id', deleteComprobanteDetalle)

module.exports = router;