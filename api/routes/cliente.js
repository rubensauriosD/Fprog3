const router = require('express').Router();
const {getAllClientes, createCliente, updateCliente, deleteCliente} = require('../controllers/cliente.js');

router.get('/', getAllClientes);

router.post('/', createCliente);

router.put('/:id', updateCliente);

router.delete('/:id', deleteCliente);

module.exports = router;