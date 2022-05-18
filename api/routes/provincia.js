const router = require('express').Router();
const {getProvincia, createProvincia, updateProvincia, deleteProvincia} = require('../controllers/provincia.js')

router.get('/', getProvincia);

router.post('/', createProvincia);

router.put('/:id', updateProvincia);

router.delete('/:id', deleteProvincia);

module.exports = router;