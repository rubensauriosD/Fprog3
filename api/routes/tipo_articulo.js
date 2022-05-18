const router = require('express').Router();
const {getTipoArticulo, createTipoArticulo, updateTipoArticulo, deleteTipoArticulo} = require('../controllers/tipoArticulo.js');

router.get('/', getTipoArticulo);

router.post('/', createTipoArticulo);

router.put('/:id', updateTipoArticulo);

router.delete('/:id', deleteTipoArticulo);

module.exports = router;