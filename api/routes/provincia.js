const router = require('express').Router();
const conexion = require('../db/database');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM provincia', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-provincia');
        }
    })
})

router.post('/', (req, res) => {
    const data = req.body;

    conexion.query('INSERT INTO provincia SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-provincia');
            res.json(data)
        }
    })
})

router.put('/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE provincia set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-provincia');
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('DELETE FROM provincia WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-provincia');
        }
    })
})

module.exports = router;