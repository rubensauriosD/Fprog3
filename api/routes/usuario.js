const router = require('express').Router();
const conexion = require('../db/database');

router.get('/', (req, res) => {
        conexion.query('SELECT * FROM usuario', (err, rows) => {
            if (err) {
                throw err;
            }
            else
            {
                res.json(rows);
                console.log('GET-usuario');
            }
        })
    
})

router.post('/', (req, res) => {
    const data = req.body;

    conexion.query('INSERT INTO usuario SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-usuario');
            ()=>res.json(data)
        }
    })
})

router.put('/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE usuario set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-usuario');
        }
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    conexion.query('DELETE FROM usuario WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-usuario');
        }
    })
})

module.exports = router;