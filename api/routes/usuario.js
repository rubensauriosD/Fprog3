const router = require('express').Router();
const {getUsuario, createUsuario, updateUsuario, deleteUsuario} = require('../controllers/usuario.js');

router.get('/', getUsuario);

router.post('/', createUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

module.exports = router;