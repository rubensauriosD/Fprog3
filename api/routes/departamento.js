const router = require('express').Router();
const conexion = require('../db/database');
const {getDepartamento, createDepartamento, updateDepartamento, deleteDepartamento} = require('../controllers/departamento.js');

router.get('/', getDepartamento);

router.post('/', createDepartamento);

router.put('/:id', updateDepartamento);

router.delete('/:id', deleteDepartamento);

module.exports = router;