const router = require('express').Router();
const conexion = require('../db/database');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM pais', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-pais');
        }
    })
})

router.post('/', (req, res) => {
    const data = req.body;

    conexion.query('INSERT INTO pais SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-pais');
            ()=>res.json(data)
        }
    })
})

router.put('/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE pais set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-pais');
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('DELETE FROM pais WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-pais');
        }
    })
})

module.exports = router;