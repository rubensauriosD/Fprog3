const router = require('express').Router();
const { getLocalidad, createLocalidad, updateLocalidad, deleteLocalidad} = require('../controllers/localidad.js');

router.get('/', getLocalidad);

router.post('/', createLocalidad);

router.put('/:id', updateLocalidad);

router.delete('/:id', deleteLocalidad);

module.exports = router;