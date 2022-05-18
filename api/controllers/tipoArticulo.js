const conexion = require('../db/database');


async function getTipoArticulo (req, res) {
    conexion.query('SELECT * FROM tipo_articulo', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-tipo_articulo');
        }
    })
}


async function createTipoArticulo (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO tipo_articulo SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-tipo_articulo');
            ()=>res.json(data)
        }
    })
}


async function updateTipoArticulo (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE tipo_articulo set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-tipo_articulo');
        }
    })
}


async function deleteTipoArticulo (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM tipo_articulo WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-tipo_articulo');
        }
    })
}



module.exports = {
    getTipoArticulo,
    createTipoArticulo,
    updateTipoArticulo,
    deleteTipoArticulo
}