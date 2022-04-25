const router = require('express').Router();
const conexion = require('../db/database');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM cliente', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-cliente');
        }
    })
})

router.post('/', (req, res) => {
    const data = req.body;

    conexion.query('INSERT INTO cliente SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-cliente');
            res.json(data)
        }
    })
})

router.put('/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE cliente set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-cliente');
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('DELETE FROM cliente WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-cliente');
        }
    })
})

module.exports = router;