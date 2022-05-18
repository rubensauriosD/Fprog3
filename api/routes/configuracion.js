const router = require('express').Router();
const conexion = require('../db/database');
const {getConfiguracion, createConfiguracion, updateConfiguracion,deleteConfiguracion} = require('../controllers/configuracion.js');

router.get('/',getConfiguracion);

router.post('/', createConfiguracion);

router.put('/:id', updateConfiguracion);

router.delete('/:id', deleteConfiguracion);

module.exports = router;