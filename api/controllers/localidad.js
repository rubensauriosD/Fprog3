const conexion = require('../db/database');

async function getLocalidad (req, res) {
    conexion.query('SELECT * FROM localidad', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-articulo');
        }
    })
}

async function createLocalidad (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO localidad SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-localidad');
            ()=>res.json(data)
        }
    })
}

async function updateLocalidad (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE localidad set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-localidad');
        }
    })
}

async function deleteLocalidad (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM localidad WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-localidad');
        }
    })
}


module.exports = {
    getLocalidad,
    createLocalidad,
    updateLocalidad,
    deleteLocalidad
}