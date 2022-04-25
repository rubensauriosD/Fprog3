const router = require('express').Router();
const conexion = require('../db/database');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM articulo', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-articulo');
        }
    })
})

router.post('/', (req, res) => {
    const data = req.body;

    conexion.query('INSERT INTO articulo SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-articulo');
            res.json(data)
        }
    })
})

router.put('/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE articulo set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-articulo');
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('DELETE FROM articulo WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-articulo');
        }
    })
})

module.exports = router;