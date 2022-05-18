const router = require('express').Router();
const conexion = require('../db/database');
const {getPais, createPais, updatePais, deletePais} = require('../controllers/pais.js');

router.get('/', getPais);

router.post('/', createPais);

router.put('/:id', updatePais);

router.delete('/:id', deletePais);

module.exports = router;