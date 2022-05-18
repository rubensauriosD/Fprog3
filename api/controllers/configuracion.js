const conexion = require('../db/database');

async function getConfiguracion (req, res) {
    conexion.query('SELECT * FROM configuracion', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-configuracion');
        }
    })
}


async function createConfiguracion (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO configuracion SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-configuracion');
            ()=>res.json(data)
        }
    })
}


async function updateConfiguracion (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE configuracion set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-configuracion');
        }
    })
}

async function deleteConfiguracion (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM configuracion WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-configuracion');
        }
    })
}


module.exports = {
    getConfiguracion,
    createConfiguracion,
    updateConfiguracion,
    deleteConfiguracion
}